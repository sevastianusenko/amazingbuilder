// Real Google reviews, text as published. Source: the business's Google profile, exported 2026-10-06.
// The owner's own review and emoji-only reviews are left out on purpose.
export type Review = { name: string; date: string; text: string; featured?: boolean; service?: string };

export const reviews: Review[] = [
  {
    name: "Ivan Arhipov",
    date: "2026-07-17",
    text: "He is a knowledgeable and dependable professional. I especially appreciated his punctuality. He arrived exactly at the agreed time. He completed the work efficiently, and I was very pleased with the quality of the job. His pricing is also very reasonable. I would gladly recommend him to my neighbors.",
    featured: true,
  },
  {
    name: "Viktor Miseruk",
    date: "2026-07-21",
    text: "Excellent craftsman with attention to detail. Did an excellent job on my kitchen and living room, and also did a great job painting. I highly recommend and will definitely be hiring them for my next project.",
    featured: true,
    service: "kitchen-remodeling",
  },
  {
    name: "Darya Martynenka",
    date: "2026-07-21",
    text: "Excellent work, great communication, and very professional. Everything was completed on time and with high quality. Highly recommend.",
    featured: true,
  },
  {
    name: "Rotar Denys",
    date: "2026-07-19",
    text: "A craftsman who knows his trade. He works quickly, reliably, and to a high standard, and meets deadlines. I recommend him; he carries out the work conscientiously. I am grateful for the job done!",
  },
  {
    name: "William Frost",
    date: "2026-07-26",
    text: "Excellent service, great quality, and a professional team. Highly recommend!",
  },
  {
    name: "Dmitriy",
    date: "2026-07-26",
    text: "Excellent craftsman, good work, affordable prices. I recommend him to everyone.",
  },
];

export const featuredReviews = reviews.filter((r) => r.featured);
