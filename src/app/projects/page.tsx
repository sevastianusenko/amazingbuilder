import type { Metadata } from "next";
import { publishedProjects } from "@/content/projects";
import { photos } from "@/content/photos";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { PageHero, ProjectCard, PhotoGrid, CtaBand } from "@/components/blocks";
import { Section, Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Remodeling Projects in Lebanon County, PA",
  description:
    "Our own jobs with the place and month on every photo: a full South Philadelphia rowhome, kitchens, bathrooms, stairs, basements and decks.",
  alternates: { canonical: "/projects/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects/" },
];

export default function ProjectsPage() {
  const loose = photos.filter((p) => !publishedProjects.some((pr) => pr.slug === p.project) && p.stage === "after").map((p) => p.key);
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Projects"
        title="Our work, with the dates and places left on"
        lede="Every photo here was taken by our crew on our own jobs. The stamp on each one shows where and when. Nothing is stock and nothing is borrowed."
      />
      <Section tone="paper" tight>
        <div className="mb-10 max-w-2xl">
          <Eyebrow className="mb-3">Project pages</Eyebrow>
          <h2>{publishedProjects.length} jobs, each written up with what we did and why</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {publishedProjects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </Section>
      {loose.length > 0 && (
        <Section tone="primer">
          <div className="mb-8 max-w-2xl">
            <Eyebrow className="mb-3">More finished work</Eyebrow>
            <h2>Kitchens, baths, stairs, decks and more</h2>
            <p className="mt-4 text-ink-soft">Finished jobs we have not written up yet. Full project pages are added as we confirm the details with each homeowner.</p>
          </div>
          <PhotoGrid ids={loose} />
        </Section>
      )}
      <CtaBand source="projects" title="Want yours to be next?" />
    </>
  );
}
