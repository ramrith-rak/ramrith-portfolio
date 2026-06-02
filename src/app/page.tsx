import { cn, asset } from "@/lib/utils";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";

const CTA_LABELS: Record<string, string> = {
  "01": "Read the Case Study",
  "02": "Explore the Platform",
  "03": "Read the Thesis",
};

export default function Home() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-32 md:py-48">
      <div className="max-w-7xl mx-auto">

        {/* Editorial Hero */}
        <header className="reveal-item mb-48 md:mb-72">
            <h1 className="font-serif text-[clamp(3.5rem,8vw,6rem)] font-light leading-[0.9] tracking-[-0.03em] mb-8 md:mb-12">
                Ramrith Rakpoun<br />
                <i className="font-light italic">UX/UI Designer.</i>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed">
                I work across the full product cycle: collecting business requirements, designing interfaces, and writing code. Based in Bangkok, working worldwide.
            </p>
        </header>

        {/* Vertical Asymmetric Project List */}
        <section className="space-y-64 md:space-y-96">
          {PROJECTS.filter(p => p.featured || PROJECTS.indexOf(p) < 3).map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center no-underline text-inherit reveal-item"
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              {/* Image Container */}
              <div className={cn(
                "md:col-span-8 aspect-[16/10] bg-[#F5F3F0] rounded-sm border border-border overflow-hidden relative shadow-sm transition-all duration-700 group-hover:shadow-[0_8px_32px_-4px_rgba(113,146,192,0.12)] group-hover:-translate-y-1",
                index % 2 !== 0 && "md:order-2"
              )}>
                 <img
                   src={asset(project.thumbnail || project.image || "")}
                   alt={project.title}
                   className="absolute inset-0 w-full h-full p-6 md:p-10 object-contain transition-all duration-700"
                   loading={index === 0 ? "eager" : "lazy"}
                 />
              </div>

              {/* Info Container */}
              <div className={cn(
                "md:col-span-4 flex flex-col gap-8",
                index % 2 !== 0 && "md:order-1 md:text-right md:items-end"
              )}>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                    {project.tag}
                </span>
                <h2 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] tracking-tight">
                    {project.title}
                </h2>
                <p className="text-sm md:text-base text-muted leading-relaxed max-w-sm">
                    {project.description}
                </p>
                <div className="editorial-underline text-[10px] font-bold uppercase tracking-[0.2em] w-fit">
                    {CTA_LABELS[project.id] || "View Case Study"}
                </div>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </div>
  );
}
