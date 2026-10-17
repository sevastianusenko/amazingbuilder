import type { Metadata } from "next";
import Script from "next/script";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { RevealObserver } from "@/components/RevealObserver";
import { OrgSchema } from "@/components/Schema";
import { site } from "@/lib/site";

// The old site used Rubik for everything; so does this one.
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Remodeling & Painting in Lebanon County, PA`,
    template: `%s | ${site.name}`,
  },
  description:
    "Kitchens, bathrooms, basements, stairs, floors and painting from one Myerstown crew. Lebanon and Lancaster County, PA. 5.0 on Google. Free estimates.",
  openGraph: { type: "website", siteName: site.name, locale: "en_US", images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Amazing Builders, remodeling and painting in Lebanon County, PA" }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${rubik.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-paper text-ink-soft">
        <Script id="js-anim" strategy="beforeInteractive">
          {"document.documentElement.classList.add('js-anim')"}
        </Script>
        <Header />
        <main id="main" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <RevealObserver />
        <OrgSchema />
      </body>
    </html>
  );
}
