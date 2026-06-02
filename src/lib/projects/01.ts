import type { CaseStudyProject } from "@/lib/types";

export const project01: CaseStudyProject = {
  id: "01",
  tag: "LOGISTICS",
  title: "THAILAND POST",
  description: "UX redesign of the official Track & Trace app focusing on transparency, estimated delivery accuracy, and user trust.",
  type: "MOBILE APP",
  featured: false,
  image: "/projects/01/hero.png",
  thumbnail: "/projects/01/979shots_so.png",
  role: "UX/UI Designer",
  timeline: "1 week (24–31 Oct 2025)",
  tools: ["Figma"],
  sections: [
    {
      type: "text-group",
      heading: "Introduction",
      paragraphs: [
        "As e-commerce continues to grow rapidly in Thailand, parcel delivery has become an essential part of everyday life. Many people rely on tracking applications to stay informed about their orders and plan their schedules accordingly.",
        "Thailand Post's Track & Trace app is the primary platform for checking delivery status across the country. However, the current experience presents several usability challenges. Users often face unclear status updates, inconsistent information, and unreliable notifications that make it difficult to know when their parcels will actually arrive.",
      ],
    },
    {
      type: "text-group",
      heading: "The Problem",
      paragraphs: [
        "Parcel receivers using the Thailand Post application often face unreliable or inconsistent tracking information. Even when entering the correct tracking number, the system sometimes displays \"No data found,\" forcing users to recheck several times.",
        "The lack of real-time accuracy and clear feedback creates uncertainty, frustration, and a decline in user trust toward the digital experience.",
      ],
    },
    {
      type: "bullet-list",
      heading: "Objectives",
      items: [
        "Improve the parcel tracking experience with clear, accurate, and timely updates",
        "Reduce user frustration through better feedback design and more reliable responses",
        "Strengthen user trust in Thailand Post's digital platform by creating a smoother, more reassuring interface",
      ],
    },
    {
      type: "image",
      src: "/projects/01/176411bc-0474-4bb7-8248-6b8f2cb1b27d.png",
      alt: "Design process overview diagram",
      caption: "Design process — from research and definition through to final prototype.",
    },
    {
      type: "text-group",
      heading: "Research",
      paragraphs: [
        "To understand real user behavior and frustrations, I conducted qualitative research including user interviews with frequent online shoppers, observation of how users search and interpret parcel statuses, and analysis of Google Play Store reviews to identify recurring issues.",
      ],
    },
    {
      type: "bullet-list",
      heading: "Key Findings",
      items: [
        "Users often see \"No data found\" even after entering the correct tracking number, leading to repeated checks",
        "Many users feel unsure whether errors come from the system or courier update delays",
        "Tracking statuses are hard to interpret, lacking clear delivery timelines or explanations",
        "Notifications are inconsistent, forcing users to open the app frequently to confirm updates",
      ],
    },
    {
      type: "image",
      src: "/projects/01/image.png",
      alt: "Competitor analysis comparison",
      caption: "Competitor analysis — comparing tracking experiences across postal and logistics apps.",
    },
    {
      type: "image",
      src: "/projects/01/perosona.png",
      alt: "User persona for Thailand Post tracking app",
      caption: "Primary persona — a frequent online shopper who checks tracking multiple times daily and needs reassurance, not just data.",
    },
    {
      type: "image",
      src: "/projects/01/5d42542b-fb55-4523-a1ad-a9e5b5fda58d.png",
      alt: "User journey map showing tracking experience pain points",
      caption: "User journey map — identifying frustration points across the end-to-end tracking experience.",
    },
    {
      type: "image",
      src: "/projects/01/image-1.png",
      alt: "Information architecture diagram",
      caption: "Information architecture — restructuring the app's navigation and content hierarchy.",
    },
    {
      type: "image",
      src: "/projects/01/image-2.png",
      alt: "Low fidelity wireframe prototypes",
      caption: "Low-fidelity prototypes — testing structure and flow before visual design.",
    },
    {
      type: "image",
      src: "/projects/01/slide_16_9_-_1.png",
      alt: "Design system overview",
      caption: "Design system — typography, color, and component specifications for the redesigned app.",
    },
    {
      type: "comparison",
      heading: "Old Design vs. New Design",
      before: { src: "/projects/01/image-3.png", alt: "Original Thailand Post tracking UI with 5 identified problems" },
      after: { src: "/projects/01/hero.png", alt: "Redesigned tracking experience with 5 improvements applied" },
      body: "Five critical changes: (1) Redesigned the home screen as an active dashboard replacing the single-item view. (2) Added Quick Actions for pricing, support, and reporting issues. (3) Prominently displayed Estimated Delivery Date in both list and detail views. (4) Added a visual Progress Tracker with tabbed shipment details. (5) Replaced the ambiguous bottom navigation with clear, standard icons (Home, My Parcels, Branches, Profile) and moved the Scan icon next to the search bar.",
    },
    {
      type: "text-group",
      heading: "Reflection",
      paragraphs: [
        "This was a one-week design sprint, but the time constraint forced clarity. I couldn't redesign everything — I had to identify the highest-impact changes and execute them with precision.",
      ],
    },
    {
      type: "learnings",
      heading: "What I Learned",
      items: [
        "User research is core. The persona's anxiety wasn't just about an outdated UI — it stemmed from missing critical information like Estimated Delivery Time. Research revealed the root cause, not just the symptom.",
        "Good UI is trustworthy UI. The ambiguity of the old design (unclear statuses, hidden help menus) directly eroded user confidence. Transparency through a visual Progress Tracker and clear status details rebuilds that trust.",
        "A feature only exists if users can find it. The old design's barcode scanner was hidden inside a modal. Moving it to a prominent location next to the search bar solved a critical discoverability problem without building anything new.",
      ],
    },
    {
      type: "bullet-list",
      heading: "Skills Demonstrated",
      items: [
        "User Research & Analysis — synthesized qualitative data from interviews, observation, personas, journey maps, and competitor analysis",
        "Problem Solving & Ideation — translated abstract pain points (anxiety, inability to plan) into tangible solutions (ETA display, Progress Tracker)",
        "Information Architecture — restructured the app's IA with clear bottom navigation and tabbed detail views",
        "UI/UX Design & Prototyping — delivered a high-fidelity prototype focused on clarity, trust, and addressing every failure of the old design",
      ],
    },
  ],
};
