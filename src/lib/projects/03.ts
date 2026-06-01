import type { CaseStudyProject } from "@/lib/types";

export const project03: CaseStudyProject = {
  id: "03",
  tag: "FINTECH",
  title: "SAVINGS COOP",
  description: "Data-driven dashboard redesign for a large savings cooperative, improving usability and one-handed accessibility without backend changes.",
  type: "MOBILE APP",
  featured: false,
  image: "/projects/03/hero.png",
  role: "UX/UI Designer & Business Analyst",
  timeline: "1 week (28 Sep – 4 Oct 2025)",
  tools: ["Figma", "Draw.io", "Google Docs"],
  sections: [
    {
      type: "text-group",
      heading: "Background",
      paragraphs: [
        "A large savings cooperative in Thailand needed to redesign their mobile banking app. The existing app was text-heavy, visually inconsistent, and buried key financial information behind multiple taps. Users — many of whom were not tech-savvy — struggled to complete basic tasks like checking their balance or viewing recent transactions.",
        "The scope was focused but high-stakes: redesign the home screen layout and navigation flow for both Android and iOS. No backend changes allowed — everything had to work within the existing API. Duration: 7 days.",
      ],
    },
    {
      type: "numbered-list",
      heading: "The Key Problem",
      items: [
        {
          label: "Buried Information",
          body: "Account balance, the single most important piece of information for users, was hidden behind a tap on a text link. Transaction history required navigating through multiple menus. Users were taking 3+ steps to access what should be visible immediately.",
        },
        {
          label: "Cognitive Load",
          body: "The home screen presented dense tables of numbers with no visual hierarchy. Every piece of information had equal weight, so nothing stood out. Users had to actively search for what mattered rather than having it surface naturally.",
        },
        {
          label: "Thumb Zone Problem",
          body: "Critical actions were positioned at the top of the screen — out of reach for one-handed use. On larger phones, users had to shift their grip or use two hands just to tap a menu item. For an app used frequently throughout the day, this was constant friction.",
        },
        {
          label: "Visual Inconsistency",
          body: "Typography, spacing, colors, and component styles varied across screens with no apparent system. This inconsistency made the app feel unreliable — users associated the visual messiness with a lack of security, which is fatal for a financial product.",
        },
      ],
    },
    {
      type: "text-group",
      heading: "The Solution",
      paragraphs: [
        "The redesign focused on three principles: surface what matters, keep it within thumb reach, and make it feel trustworthy through visual consistency.",
        "The most impactful change was bringing the account balance and transaction history to the first screen. What previously required multiple taps was now visible immediately after login. A bottom navigation bar replaced the top-positioned menu, putting every primary action in the thumb zone.",
      ],
    },
    {
      type: "bullet-list",
      heading: "Key Design Features",
      items: [
        "Account balance displayed prominently on the home screen with a show/hide toggle for privacy",
        "Bottom navigation bar with four primary destinations — every action reachable with one hand",
        "Sliding transaction cards that let users browse recent activity without leaving the home screen",
        "Quick-action menu for frequent tasks (transfer, top-up, bill pay) — accessible from the thumb zone",
        "Consistent card-based layout with clear visual hierarchy: balance first, transactions second, offers third",
      ],
    },
    {
      type: "comparison",
      heading: "Before & After: Visibility of System Status",
      before: { src: "/projects/03/old-design.png", alt: "Original Savings Coop home screen — text-heavy, no visual hierarchy" },
      after: { src: "/projects/03/hero.png", alt: "Redesigned home screen — card-based, balance-first layout" },
      body: "The old design required 3 steps to check your balance. The new design shows it immediately after login. Sliding transaction cards and the show/hide balance toggle give users control without adding steps. Applying Gestalt principles — proximity, similarity, and closure — the new layout groups related information so users process it faster.",
    },
    {
      type: "text-group",
      heading: "User Testing & Outcomes",
      paragraphs: [
        "I built a mid-fidelity prototype first and reviewed it internally with the development and systems analyst teams. Their feedback validated the structural changes — especially the bottom navigation and surfaced balance — before I invested time in visual polish.",
        "The high-fidelity prototype included a complete design system: color tokens, typography scale (Sarabun typeface, 5 styles from H1 at 32px to Body-xs at 12px), icon system (24×24 grid, 2px stroke), and reusable components (text fields, 3 button variants, card layouts).",
        "When I presented the final design to the client, they approved it without a single revision request. The design system documentation meant the development team could start building immediately with no ambiguity.",
      ],
    },
    {
      type: "image-grid",
      heading: "Design System",
      images: [
        { src: "/projects/03/color-system.png", alt: "Color system with orange primary and neutral grays" },
        { src: "/projects/03/typography.png", alt: "Typography scale using Sarabun typeface" },
        { src: "/projects/03/user-flow.png", alt: "User flow diagram for login and navigation" },
        { src: "/projects/03/old-design.png", alt: "Original app design before redesign" },
      ],
    },
    {
      type: "learnings",
      heading: "Takeaways",
      items: [
        "Design within constraints. Not being able to change the backend forced me to focus entirely on what the user sees and touches — and that's where most usability problems actually live.",
        "Internal review before client review. Getting feedback from the dev and SA teams first caught issues I hadn't considered and made the client presentation stronger.",
        "A delivered design system is worth more than a beautiful mockup. The client approved without revisions because the design system left no ambiguity. Developers had exact specs for every component state.",
        "One-hand usability isn't a luxury. For an app checked multiple times daily, bringing every action into the thumb zone transformed the experience from frustrating to effortless.",
      ],
    },
  ],
};
