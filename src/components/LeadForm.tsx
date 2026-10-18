"use client";

import { useRef, useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { Button } from "./ui/Button";

type Status = "idle" | "sending" | "sent" | "error";
type Shot = { id: string; name: string; blob: Blob; url: string };

// Photos are shrunk in the browser before upload: phone photos are 3 to 8 MB each, and the
// whole request has to stay under the 4.5 MB limit of a Vercel function.
const MAX_PHOTOS = 6;
const MAX_SIDE = 1600;
const MAX_TOTAL = 4_000_000;

async function shrink(file: File, quality: number): Promise<Blob> {
  const bmp = await createImageBitmap(file, { imageOrientation: "from-image" });
  const scale = Math.min(1, MAX_SIDE / Math.max(bmp.width, bmp.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bmp.width * scale);
  canvas.height = Math.round(bmp.height * scale);
  canvas.getContext("2d")!.drawImage(bmp, 0, 0, canvas.width, canvas.height);
  bmp.close();
  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("encode"))), "image/jpeg", quality));
}

/** The estimate form in its card. Every page uses this one, so the form looks the same everywhere. */
export function EstimateCard({ source, defaultService }: { source: string; defaultService?: string }) {
  return (
    <div className="rounded-card bg-primer p-6 text-ink shadow-[var(--shadow-lift)] sm:p-8">
      <LeadForm source={source} defaultService={defaultService} />
    </div>
  );
}

export function LeadForm({
  source = "site",
  defaultService,
  tone = "light",
  compact = false,
}: {
  source?: string;
  defaultService?: string;
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [shots, setShots] = useState<Shot[]>([]);
  const [busy, setBusy] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  async function addPhotos(files: FileList | null) {
    if (!files?.length) return;
    setBusy(true);
    setError("");
    const room = MAX_PHOTOS - shots.length;
    const picked = Array.from(files).slice(0, Math.max(0, room));
    const added: Shot[] = [];
    let failed = 0;
    for (const f of picked) {
      try {
        const blob = await shrink(f, 0.8);
        added.push({ id: `${f.name}-${f.size}-${Math.random()}`, name: f.name.replace(/\.[^.]+$/, "") + ".jpg", blob, url: URL.createObjectURL(blob) });
      } catch {
        failed++;
      }
    }
    setShots((s) => [...s, ...added]);
    if (fileInput.current) fileInput.current.value = "";
    setBusy(false);
    if (failed) setError(`${failed} photo${failed > 1 ? "s" : ""} could not be read. Try a JPG or a screenshot of it.`);
    else if (files.length > room) setError(`Up to ${MAX_PHOTOS} photos. The first ${room} were added.`);
  }

  function removePhoto(id: string) {
    setShots((s) => {
      const gone = s.find((x) => x.id === id);
      if (gone) URL.revokeObjectURL(gone.url);
      return s.filter((x) => x.id !== id);
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") || "");
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Add a phone number with the area code so we can call you back.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const body = new FormData();
      for (const k of ["name", "email", "town", "service", "message", "company"]) body.set(k, String(data.get(k) || ""));
      body.set("phone", phone);
      body.set("source", source);
      body.set("page", typeof window !== "undefined" ? window.location.pathname : "");
      let total = 0;
      for (const s of shots) {
        if (total + s.blob.size > MAX_TOTAL) break;
        total += s.blob.size;
        body.append("photos", s.blob, s.name);
      }
      const res = await fetch("/api/lead/", { method: "POST", body });
      const json = (await res.json().catch(() => ({ ok: false }))) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "Could not send. Please call us.");
      setStatus("sent");
      shots.forEach((s) => URL.revokeObjectURL(s.url));
      setShots([]);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send");
      setStatus("error");
    }
  }

  const dark = tone === "dark";
  const label = `block text-[0.72rem] font-semibold uppercase tracking-[0.08em] ${dark ? "text-white/70" : "text-ink-mute"}`;

  if (status === "sent") {
    return (
      <div className={`rounded-card p-5 ${dark ? "bg-white/5" : "bg-paper"}`} role="status">
        <p className="font-display text-[1.2rem] font-bold">Got it. We will call you back.</p>
        <p className={`mt-2 ${dark ? "text-white/80" : "text-ink-soft"}`}>
          {site.callbackPromise}. If it is urgent, call <a href={site.phoneHref} className="underline">{site.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"} ${dark ? "on-dark" : ""}`} noValidate>
      <div className="hidden" aria-hidden="true">
        <label>
          Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div>
        <label htmlFor={`${source}-name`} className={label}>
          Name
        </label>
        <input id={`${source}-name`} name="name" required autoComplete="name" className="field mt-1.5" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor={`${source}-phone`} className={label}>
          Phone
        </label>
        <input id={`${source}-phone`} name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="field mt-1.5" placeholder="(717) 555-0100" />
      </div>
      {!compact && (
        <>
          <div>
            <label htmlFor={`${source}-email`} className={label}>
              Email (optional)
            </label>
            <input id={`${source}-email`} name="email" type="email" autoComplete="email" className="field mt-1.5" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor={`${source}-town`} className={label}>
              Town
            </label>
            <input id={`${source}-town`} name="town" autoComplete="address-level2" className="field mt-1.5" placeholder="Lebanon, Hershey, Lititz..." />
          </div>
        </>
      )}
      <div className={compact ? "" : "sm:col-span-2"}>
        <label htmlFor={`${source}-service`} className={label}>
          What do you need done?
        </label>
        <select id={`${source}-service`} name="service" defaultValue={defaultService ?? ""} className="field mt-1.5">
          <option value="">Pick one (optional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </div>
      {!compact && (
        <>
          <div className="sm:col-span-2">
            <label htmlFor={`${source}-message`} className={label}>
              Tell us about the project
            </label>
            <textarea id={`${source}-message`} name="message" rows={4} className="field mt-1.5" placeholder="Which room, roughly how big, what you want changed, and when you would like to start." />
          </div>
          <div className="sm:col-span-2">
            <span className={label}>Photos (optional, up to {MAX_PHOTOS})</span>
            <p className={`mt-1 text-[0.88rem] ${dark ? "text-white/70" : "text-ink-soft"}`}>
              A few photos of the room or the damage let us send a ballpark price before we visit.
            </p>
            <div className="mt-2.5 flex flex-wrap items-center gap-3">
              {shots.map((s) => (
                <div key={s.id} className="relative h-20 w-20 overflow-hidden rounded-xl border border-line bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element -- local preview of a picked file */}
                  <img src={s.url} alt="" className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removePhoto(s.id)}
                    className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-ink/80 text-[0.9rem] leading-none text-white"
                    aria-label={`Remove photo ${s.name}`}
                  >
                    ×
                  </button>
                </div>
              ))}
              {shots.length < MAX_PHOTOS && (
                <label
                  htmlFor={`${source}-photos`}
                  className={`flex h-20 cursor-pointer items-center justify-center rounded-xl border-[1.5px] border-dashed px-4 text-center text-[0.85rem] font-semibold ${
                    dark ? "border-white/40 text-white" : "border-line bg-white text-bronze-deep hover:border-bronze"
                  }`}
                >
                  {busy ? "Adding..." : shots.length ? "+ Add more" : "+ Add photos"}
                </label>
              )}
              <input
                ref={fileInput}
                id={`${source}-photos`}
                type="file"
                accept="image/*"
                multiple
                className="sr-only"
                onChange={(e) => addPhotos(e.currentTarget.files)}
              />
            </div>
          </div>
        </>
      )}
      <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${compact ? "" : "sm:col-span-2"}`}>
        <Button variant="bronze" disabled={status === "sending" || busy} className="w-full sm:w-auto">
          {status === "sending" ? (shots.length ? "Sending photos..." : "Sending...") : "Request a free estimate"}
        </Button>
        <p className={`text-[0.85rem] ${dark ? "text-white/60" : "text-ink-mute"}`}>No obligation. We reply during work hours, Monday to Friday.</p>
      </div>
      {error && (
        <p className={`text-[0.95rem] text-danger ${compact ? "" : "sm:col-span-2"}`} role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
