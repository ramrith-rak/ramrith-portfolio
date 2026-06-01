import type { CaseStudyProject } from "@/lib/types";

export const project05: CaseStudyProject = {
  id: "05",
  tag: "UI/UX",
  title: "BENEFICIARY FLOW",
  description: "Streamlining complex paper-based beneficiary designation into a frictionless digital workflow.",
  type: "PRODUCT",
  featured: false,
  image: "/projects/05/image-1.png",
  role: "UX/UI Designer",
  timeline: "1 week",
  tools: ["Figma"],
  sections: [
    {
      type: "text-group",
      heading: "The Problem",
      paragraphs: [
        "Designating beneficiaries for financial accounts is a critical but painful process. The existing workflow was entirely paper-based: users filled out complex forms by hand, often making errors that required resubmission. The process was slow, confusing, and error-prone for both users and administrators.",
        "The challenge was to transform a dense, legal-document experience into a clear, guided digital flow — without losing the precision and compliance required by financial regulations.",
      ],
    },
    {
      type: "comparison",
      heading: "Before & After",
      before: { src: "/projects/05/image.png", alt: "Original paper-based beneficiary form" },
      after: { src: "/projects/05/image-1.png", alt: "Redesigned digital beneficiary flow — step 1" },
      body: "The redesign eliminates paper forms entirely. What was once a multi-page document completed by hand is now a guided digital experience with input validation, progress tracking, and clear error recovery.",
    },
    {
      type: "image-grid",
      heading: "Digital Flow — All Screens",
      images: [
        { src: "/projects/05/image-2.png", alt: "Step 2 — Allocation and distribution", caption: "Step 2 — Allocate percentage distribution across beneficiaries" },
        { src: "/projects/05/image-3.png", alt: "Step 3 — Review and confirm", caption: "Step 3 — Review all details before final submission" },
        { src: "/projects/05/image-4.png", alt: "Step 4 — Confirmation", caption: "Step 4 — Submission confirmation with clear next steps" },
        { src: "/projects/05/image-5.png", alt: "Step 5 — Completion", caption: "Step 5 — Completed designation summary" },
      ],
    },
    {
      type: "learnings",
      heading: "Key Takeaways",
      items: [
        "Financial UX doesn't need to feel cold. Warm, clear language in a regulated context builds trust better than legal jargon.",
        "Step-by-step wizards work when each step is a genuine decision point, not an arbitrary break in a long form.",
        "Real-time validation prevents the most common failure mode in paper forms: discovering errors only after submission.",
      ],
    },
  ],
};
