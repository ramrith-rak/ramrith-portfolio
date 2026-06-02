import { Mail, Globe, Terminal, Phone } from "lucide-react";

export { PROJECTS } from "./projects";

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
