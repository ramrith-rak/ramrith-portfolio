import type { CaseStudyProject } from "@/lib/types";

export const project02: CaseStudyProject = {
  id: "02",
  tag: "PRODUCT DESIGN",
  title: "HRM - VIBE CODING",
  description: "Full-stack HR management platform designed and built using AI-assisted development (Vibe Coding). 60+ screens across 7 functional modules.",
  type: "WEB APP",
  featured: true,
  image: "/projects/02/hero.png",
  role: "UX/UI Designer (Sole Designer)",
  timeline: "1 Month (Feb 2026 – Mar 2026)",
  tools: ["Agentic AI", "Next.js 16", "React 19", "MUI v7", "TypeScript", "PostgreSQL"],
  sections: [
    {
      type: "text-group",
      heading: "The Problem",
      paragraphs: [
        "Most companies still run HR on paper. Timesheets are scribbled on desks. Leave requests go through chat messages. Expense claims pile up in inboxes. For employees, every HR task is friction. For HR teams, every process is manual reconciliation.",
        "I experienced this firsthand. One morning, I went directly to a client site and couldn't clock in — the system only worked from the office. That moment of frustration became the seed for this entire project.",
      ],
    },
    {
      type: "text-group",
      heading: "The Approach",
      paragraphs: [
        "I used Vibe Coding — directing AI as the architect while it builds as the engineer. Every design decision was mine; the AI executed the implementation. This let me design at the speed of thought: define the UX, describe the component, and see it working within minutes.",
        "The result is a production-scale HRM platform with 60+ screens, 300+ components, and 7 functional modules — all built from design direction without writing code by hand.",
      ],
    },
    {
      type: "numbered-list",
      heading: "Key Design Decisions",
      items: [
        {
          label: "Attendance — Solving My Own Pain Point",
          body: "Clock in from anywhere with geofencing verification. Multi-session support lets field staff log multiple work periods in a day. An auto-checkout safety net prevents accidental overnight sessions if someone forgets to clock out.",
        },
        {
          label: "Dashboard — Role-Adaptive Views",
          body: "The dashboard changes based on who's looking. Employees see their own attendance, pending requests, and upcoming events. HR sees org-wide analytics, approval queues, and exception alerts. Lazy-loaded tabs keep the initial render fast despite the data density.",
        },
        {
          label: "Leave Requests — Paper to Digital",
          body: "Replaced a multi-step paper process with a single-screen digital flow. Employees select dates, attach evidence, and submit. The system auto-calculates remaining leave balances and enforces Thai-specific policies like prorated entitlements for new hires.",
        },
        {
          label: "Expenses — Draft-First Workflow",
          body: "Instead of a single-shot form, expenses are saved as drafts by default. Users can attach photos of receipts, build up a claim over several days, and submit when ready. Vehicle reimbursement auto-calculates based on distance and rate per kilometer.",
        },
        {
          label: "Approvals Hub — One Place for Everything",
          body: "HR, Finance, and IT approvals converge in a single view. Approvers see the request type, submitter, urgency, and supporting documents without switching contexts. Batch approve/reject handles high-volume periods.",
        },
        {
          label: "Events & Meetings — Calendar with Teeth",
          body: "Company events appear in an in-app calendar with RSVP tracking. Meeting invites detect conflicts across attendees. Reminders push to the dashboard so events don't get buried in email.",
        },
        {
          label: "Organization Analytics — Seeing the Whole Picture",
          body: "HR leaders get a high-level view of attendance patterns, employee distribution across departments, and leave utilization trends. Designed for quarterly reviews and workforce planning, not daily monitoring.",
        },
      ],
    },
    {
      type: "text-group",
      heading: "Design System",
      paragraphs: [
        "Thai-first localization: every label, error message, and notification was designed in Thai first, then translated to English — not the reverse. This matters because Thai text runs 15-20% longer than English, so layouts must accommodate expansion.",
        "Visual language: MUI v7 components customized into a card-based, color-coded system. Modules have distinct accent colors so employees navigating between sections always know where they are. Micro-animations provide feedback on state changes (clock-in confirms with a subtle pulse, approvals transition with a slide).",
        "The component library follows Atomic Design: atoms (buttons, inputs, badges) → molecules (date pickers, status chips, approval cards) → organisms (attendance tracker, leave form, expense builder) → templates (employee dashboard, HR command center).",
      ],
    },
    {
      type: "pull-quote",
      text: "467 files. 80,000+ lines of code. 60 database models. Zero lines written by hand. This is what happens when design leads and AI builds.",
    },
    {
      type: "image-grid",
      heading: "Screenshots",
      images: [
        { src: "/projects/02/hero.png", alt: "HRM dashboard with role-adaptive views", caption: "Role-adaptive dashboard — employee view with attendance, requests, and events" },
        { src: "/projects/02/detail-1.png", alt: "HRM approvals and leave management screens", caption: "Leave requests and approvals hub — multi-step paper process replaced with a single-screen digital flow" },
      ],
    },
    {
      type: "learnings",
      heading: "What I Learned",
      items: [
        "Solve your own problems. The best design work comes from genuine frustration — you already understand the user because you are the user.",
        "Vibe Coding changes what's possible. When the cost of building a feature is a conversation instead of a sprint, designers can be far more ambitious about scope and polish.",
        "Thai-first design is rare. Most enterprise software in Thailand is localized from English. Designing in Thai first produced more natural IA and interaction patterns.",
        "Design the boring stuff. Attendance tracking and expense claims aren't glamorous, but they're where employees spend real time. Making the mundane frictionless earns more goodwill than a flashy dashboard.",
        "Progressive disclosure in enterprise UX. Power users (HR admins) need everything at their fingertips. Casual users (employees clocking in) need one thing, fast. The same app must feel simple and powerful depending on who's looking.",
      ],
    },
  ],
};
