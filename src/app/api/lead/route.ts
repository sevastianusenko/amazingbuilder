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
};

const clean = (v: unknown, max = 500) => (typeof v === "string" ? v.replace(/[<>]/g, "").trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = (await req.json()) as Lead;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden company field. Pretend success.
  if (clean(body.company, 10)) return NextResponse.json({ ok: true });

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

  const subject = `Estimate request: ${lead.service || "project"} in ${lead.town || "PA"} (${lead.name})`;

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Town", lead.town],
    ["Service", lead.service],
    ["Message", lead.message],
    ["Page", lead.page ? `${site.url}${lead.page}` : ""],
    ["Form", lead.source],
  ].filter(([, v]) => v) as [string, string][];

  // Resend delivers the email. LEAD_FROM must be on a domain verified in Resend; until then the
  // resend.dev sender only delivers to the Resend account owner's address. Without a key the lead
  // is only logged (local development).
  const key = process.env.RESEND_API_KEY;
  if (key) {
    const to = (process.env.LEAD_TO || site.email).split(",").map((s) => s.trim()).filter(Boolean);
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        from: process.env.LEAD_FROM || `${site.name} website <onboarding@resend.dev>`,
        to,
        reply_to: lead.email || undefined,
        subject,
        text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
        html: `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:15px">${rows
          .map(([k, v]) => `<tr><td style="color:#666;vertical-align:top">${k}</td><td>${v.replace(/\n/g, "<br>")}</td></tr>`)
          .join("")}</table>`,
      }),
    });
    if (!res.ok) {
      console.error("resend failed", res.status, await res.text());
      return NextResponse.json({ ok: false, error: "Could not send right now. Please call us." }, { status: 502 });
    }
  } else {
    console.log("[lead]", subject, JSON.stringify(lead));
  }

  return NextResponse.json({ ok: true });
}
