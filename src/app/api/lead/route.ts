import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  town?: string;
  service?: string;
  message?: string;
  source?: string;
  page?: string;
  company?: string;
  elapsed?: string | number; // ms between the form appearing and the submit
};

const clean = (v: unknown, max = 500) => (typeof v === "string" ? v.replace(/[<>]/g, "").trim().slice(0, max) : "");

// Spam filters. A person needs more than a few seconds to fill the form; scripts that post straight to
// this route send no timing at all. Links are the signature of SEO spam; a homeowner almost never needs one.
const MIN_FILL_MS = 3000;
const LINK = /(https?:\/\/|www\.|\[url|<a\s|\b[a-z0-9-]+\.(com|net|org|info|biz|ru|xyz|top|site|online|shop|io|co)\b)/i;

// Photos arrive already shrunk by the form (about 1600 px JPEG). These limits only stop abuse.
const MAX_PHOTOS = 6;
const MAX_PHOTO_BYTES = 3_000_000;

type Attachment = { filename: string; content: string };

export async function POST(req: Request) {
  let body: Lead;
  const attachments: Attachment[] = [];
  try {
    if ((req.headers.get("content-type") || "").includes("multipart/form-data")) {
      const form = await req.formData();
      body = {};
      for (const k of ["name", "phone", "email", "town", "service", "message", "source", "page", "company", "elapsed"] as const) {
        const v = form.get(k);
        if (typeof v === "string") body[k] = v;
      }
      const files = form.getAll("photos").filter((f): f is File => typeof f !== "string").slice(0, MAX_PHOTOS);
      for (const [i, f] of files.entries()) {
        if (!f.type.startsWith("image/") || f.size > MAX_PHOTO_BYTES) continue;
        const ext = f.type === "image/png" ? "png" : f.type === "image/webp" ? "webp" : "jpg";
        attachments.push({ filename: `photo-${i + 1}.${ext}`, content: Buffer.from(await f.arrayBuffer()).toString("base64") });
      }
    } else {
      body = (await req.json()) as Lead;
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden company field. Pretend success so they do not adapt.
  if (clean(body.company, 10)) return NextResponse.json({ ok: true });

  // Time trap: missing or too-fast timing means a script. Same silent success.
  const elapsed = Number(body.elapsed);
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    console.log("[lead] dropped: filled in", body.elapsed ?? "no timing", "ms");
    return NextResponse.json({ ok: true });
  }

  const lead = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 40),
    email: clean(body.email, 160),
    town: clean(body.town, 80),
    service: clean(body.service, 80),
    message: clean(body.message, 2000),
    source: clean(body.source, 60),
    page: clean(body.page, 200),
  };

  if (!lead.name || lead.phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ ok: false, error: "Name and phone are required" }, { status: 422 });
  }

  // A link in the name or town is always spam: drop it quietly.
  if (LINK.test(lead.name) || LINK.test(lead.town)) {
    console.log("[lead] dropped: link in name or town");
    return NextResponse.json({ ok: true });
  }
  // A link in the message gets a visible error, so a real person can remove it and resend.
  if (LINK.test(lead.message)) {
    return NextResponse.json({ ok: false, error: "Please remove links from the message. You can attach photos instead." }, { status: 422 });
  }

  const subject = `Estimate request: ${lead.service || "project"} in ${lead.town || "PA"} (${lead.name})${attachments.length ? `, ${attachments.length} photo${attachments.length > 1 ? "s" : ""}` : ""}`;

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Town", lead.town],
    ["Service", lead.service],
    ["Message", lead.message],
    ["Page", lead.page ? `${site.url}${lead.page}` : ""],
    ["Form", lead.source],
    ["Photos", attachments.length ? `${attachments.length} attached` : ""],
  ].filter(([, v]) => v) as [string, string][];

  // Resend delivers the email. LEAD_TO lists the recipients, comma-separated; put the Resend account's
  // own address first. The sender is on our domain (LEAD_FROM to override). If Resend refuses it, for
  // example while the domain is not verified, we retry from resend.dev, which Resend only delivers to
  // the account owner, so the lead still reaches the first LEAD_TO address. Without a key the lead is
  // only logged (local development).
  const key = process.env.RESEND_API_KEY;
  if (key) {
    const to = (process.env.LEAD_TO || site.email).split(",").map((s) => s.trim()).filter(Boolean);
    const email = {
      reply_to: lead.email || undefined,
      subject,
      attachments: attachments.length ? attachments : undefined,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:15px">${rows
        .map(([k, v]) => `<tr><td style="color:#666;vertical-align:top">${k}</td><td>${v.replace(/\n/g, "<br>")}</td></tr>`)
        .join("")}</table>`,
    };
    const send = (from: string, recipients: string[]) =>
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
        body: JSON.stringify({ ...email, from, to: recipients }),
      });
    let res = await send(process.env.LEAD_FROM || `${site.name} website <leads@amazingbuilderspa.com>`, to);
    if (!res.ok) {
      console.error("resend failed, retrying from resend.dev", res.status, await res.text());
      res = await send(`${site.name} website <onboarding@resend.dev>`, to.slice(0, 1));
    }
    if (!res.ok) {
      console.error("resend failed", res.status, await res.text());
      return NextResponse.json({ ok: false, error: "Could not send right now. Please call us." }, { status: 502 });
    }
  } else {
    console.log("[lead]", subject, JSON.stringify(lead), attachments.map((a) => `${a.filename} ${Math.round((a.content.length * 3) / 4 / 1024)} KB`));
  }

  return NextResponse.json({ ok: true });
}
