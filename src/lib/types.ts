export interface ProjectBase {
  id: string;
  tag: string;
  title: string;
  description: string;
  type: string;
  featured: boolean;
  image: string | null;
  thumbnail?: string;
  asset?: string;
}

export interface CaseStudyProject extends ProjectBase {
  role?: string;
  timeline?: string;
  tools?: string[];
  sections: CaseStudySection[];
}

export type CaseStudySection =
  | { type: "text"; heading: string; body: string }
  | { type: "text-group"; heading: string; paragraphs: string[] }
  | { type: "numbered-list"; heading: string; items: { label: string; body?: string; subitems?: { label: string; body: string }[] }[] }
  | { type: "bullet-list"; heading: string; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "image-grid"; heading?: string; images: { src: string; alt: string; caption?: string }[] }
  | { type: "comparison"; heading: string; before: { src: string; alt: string }; after: { src: string; alt: string }; body?: string }
  | { type: "pull-quote"; text: string; attribution?: string }
  | { type: "learnings"; heading?: string; items: string[] }
  | { type: "divider" };
