import { Mail, Globe, Terminal, Phone } from "lucide-react";

export const PROJECTS = [
  {
    id: "01",
    tag: "PRODUCT DESIGN",
    title: "HRM - VIBE CODING",
    description: "Full-stack HR management platform designed and built using AI-assisted development (Vibe Coding). 60+ screens across 7 functional modules.",
    type: "WEB APP",
    featured: true,
    image: "/projects/01/hero.png",
  },
  {
    id: "02",
    tag: "LOGISTICS",
    title: "THAILAND POST",
    description: "UX redesign of the official Track & Trace app focusing on transparency, estimated delivery accuracy, and user trust.",
    type: "MOBILE APP",
    featured: false,
    image: "/projects/02/hero.png",
  },
  {
    id: "03",
    tag: "FINTECH",
    title: "SAVINGS COOP",
    description: "Data-driven dashboard redesign for a large savings cooperative, improving usability and one-handed accessibility without backend changes.",
    type: "MOBILE APP",
    featured: false,
    image: "/projects/03/hero.png",
  },
  {
    id: "04",
    tag: "GAME DESIGN",
    title: "CATOPIA",
    description: "Thesis project: Gamified English vocabulary learning using image recognition and monster-petting interactions.",
    type: "ACADEMIC",
    featured: false,
    image: "/projects/04/hero.png",
    asset: "/projects/04/thesis.pdf",
  },
  {
    id: "05",
    tag: "UI/UX",
    title: "BENEFICIARY FLOW",
    description: "Streamlining complex paper-based beneficiary designation into a frictionless digital workflow.",
    type: "PRODUCT",
    featured: false,
    image: "/projects/05/image-1.png",
  },
] as const;

export const CONTACT_LINKS = [
  {
    name: "Email",
    value: "ramrith.rak@gmail.com",
    icon: Mail,
    href: "mailto:ramrith.rak@gmail.com",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/ramrith-rak",
    icon: Globe,
    href: "https://www.linkedin.com/in/ramrith-rak/",
  },
  {
    name: "Phone",
    value: "(+66) 97 145 9311",
    icon: Phone,
    href: "tel:+66971459311",
  },
  {
    name: "GitHub",
    value: "github.com/ramrith-rak",
    icon: Terminal,
    href: "https://github.com/ramrith-rak",
  },
] as const;

export const NAV_ITEMS = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "PROJECTS", path: "/projects" },
  { name: "CONTACT", path: "/contact" },
] as const;
