import type { Metadata } from "next";
import { site, fullAddress } from "@/lib/site";
import { homeFaqs } from "@/content/faq";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { EstimateCard } from "@/components/LeadForm";
import { Section, Eyebrow, Breadcrumbs } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";

export const metadata: Metadata = {
  title: { absolute: "Contact Amazing Builders | Free Estimate, Lebanon County PA" },
  description: `Call ${site.phone} or send the form for a free remodeling or painting estimate. Shop at ${site.address.street}, Myerstown, PA. Monday to Friday, 7 am to 5 pm.`,
  alternates: { canonical: "/contact/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact/" },
];

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(`Amazing Builders, ${fullAddress}`)}&z=12&output=embed`;
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", url: `${site.url}/contact/`, name: "Contact Amazing Builders" }} />
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow className="mb-4">Contact</Eyebrow>
              <h1>Tell us about the room.</h1>
              <p className="lede mt-6 text-ink-soft">Call, text or send the form. Add a few photos and we can send a ballpark price first; for an exact number we walk through the house and you get a written estimate a few days later.</p>
              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="eyebrow">Phone</dt>
                  <dd className="mt-1 font-display text-[1.8rem] font-bold tracking-[-0.01em] tnum">
                    <a href={site.phoneHref} className="hover:text-bronze-deep">
                      {site.phone}
                    </a>
                  </dd>
                  <dd className="text-[0.9rem] text-ink-mute">
                    <a href={site.smsHref} className="underline">
                      Text us
                    </a>{" "}
                    if that is easier. {site.hoursText}.
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.email}`} className="font-display font-semibold hover:text-bronze-deep">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Shop</dt>
                  <dd className="mt-1 font-display font-semibold">{fullAddress}</dd>
                  <dd className="text-[0.9rem] text-ink-mute">
                    Estimates happen at your house, not ours.{" "}
                    <a href={site.google.mapsUrl} rel="noopener" target="_blank" className="underline">
                      Get directions
                    </a>
                  </dd>
                </div>
                {site.hic && (
                  <div>
                    <dt className="eyebrow">PA registration</dt>
                    <dd className="mt-1">
                      PA Home Improvement Contractor #{site.hic}.{" "}
                      <a href={site.hicUrl} rel="noopener" target="_blank" className="underline">
                        Verify
                      </a>
                      {site.hicNote && <span className="mt-1 block text-[0.9rem] text-ink-mute">{site.hicNote}</span>}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
            <div className="lg:col-span-7">
              <EstimateCard source="contact" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primer-deep">
        <iframe title="Map to Amazing Builders in Myerstown, PA" src={mapSrc} className="block h-[360px] w-full border-0 grayscale-[30%]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <Faq items={homeFaqs} title="Before you call" withSchema={false} />
        </div>
      </Section>
    </>
  );
}
