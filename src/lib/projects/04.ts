import type { CaseStudyProject } from "@/lib/types";

export const project04: CaseStudyProject = {
  id: "04",
  tag: "GAME DESIGN",
  title: "CATOPIA",
  description: "Thesis project: Gamified English vocabulary learning using image recognition and monster-petting interactions.",
  type: "ACADEMIC",
  featured: false,
  image: "/projects/04/hero.png",
  asset: "/projects/04/thesis.pdf",
  role: "UX/UI Designer",
  timeline: "9 months (Jun 2022 – Apr 2023)",
  sections: [
    {
      type: "text-group",
      heading: "Overview",
      paragraphs: [
        "Catopia is a gamified mobile application that helps users learn English vocabulary through image recognition and virtual pet interactions. It was developed as my fourth-year thesis project at university.",
        "The core mechanic pairs language learning with monster collection: users photograph real-world objects, the app identifies them and teaches the corresponding English word, and the user's monster pet grows and evolves as they learn.",
      ],
    },
    {
      type: "text-group",
      heading: "My Role",
      paragraphs: [
        "As the sole UX/UI Designer on a team that included a developer and a thesis advisor, I was responsible for the complete design of the game experience.",
      ],
    },
    {
      type: "bullet-list",
      heading: "Responsibilities",
      items: [
        "Designed the game's look and feel, user flow, and all screen layouts",
        "Created game assets and visual elements",
        "Built and tested an interactive prototype with a language lecturer to validate the learning mechanics",
        "Coordinated between the thesis advisor and the developer to align design intent with technical feasibility",
        "Iterated on feedback from user testing sessions to improve the learning experience",
      ],
    },
    {
      type: "pull-quote",
      text: "The full thesis document includes detailed gameplay mechanics, screen flows, user testing results, and the complete visual design system.",
    },
    {
      type: "divider",
    },
    {
      type: "text-group",
      heading: "Full Thesis",
      paragraphs: [
        "The complete project documentation is available as a downloadable PDF. It covers the learning methodology, game mechanics, user research, visual design, and testing outcomes across 14 pages.",
      ],
    },
  ],
};
