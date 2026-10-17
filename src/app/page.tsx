import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Mosaic } from "@/components/home/Mosaic";
import { ServicesHome, FeaturedProject, ReviewsHome, AreasHome } from "@/components/home/Sections";
import { Process, CtaBand } from "@/components/blocks";
import { Section } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";
import { homeFaqs } from "@/content/faq";

export const metadata: Metadata = {
  title: { absolute: "Amazing Builders | Remodeling & Painting in Lebanon County, PA" },
  description:
    "Kitchens, bathrooms, basements, stairs, floors and painting from one Myerstown crew. Lebanon and Lancaster County, PA. 5.0 on Google. Free estimates.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mosaic />
      <ServicesHome />
      <FeaturedProject />
      <Section tone="paper">
        <div className="reveal">
          <Process />
        </div>
      </Section>
      <ReviewsHome />
      <AreasHome />
      <Section tone="primer" tight>
        <div className="reveal mx-auto max-w-3xl">
          <Faq items={homeFaqs} />
        </div>
      </Section>
      <CtaBand source="home" />
    </>
  );
}
