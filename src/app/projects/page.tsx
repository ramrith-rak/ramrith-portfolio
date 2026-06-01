import { cn } from "@/lib/utils";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-32 md:py-48 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto space-y-48 md:space-y-72">
        
        <header className="max-w-4xl space-y-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
                Archive & Selection
            </span>
            <h1 className="font-serif text-7xl md:text-9xl font-light leading-[0.85] tracking-tighter">
                Selected<br />
                <i className="font-light italic">Case Studies.</i>
            </h1>
            <p className="text-lg md:text-xl font-mono text-muted max-w-xl leading-relaxed">
                A rigorous exploration of digital frontiers, focusing on high-utility design engineering and human-centric logic.
            </p>
        </header>

        <section className="space-y-64 md:space-y-96">
          {PROJECTS.map((project, index) => (
            <Link 
              key={project.id}
              href={`/projects/${project.id}`}
              className={cn(
                "group grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start",
                index % 2 !== 0 && "md:flex-row-reverse"
              )}
            >
              <div className={cn(
                "md:col-span-7 aspect-[16/10] bg-white rounded-sm border border-border overflow-hidden relative shadow-sm transition-all duration-700 group-hover:shadow-xl group-hover:shadow-accent/5",
                index % 2 !== 0 && "md:order-2"
              )}>
                 <div className="absolute inset-0 bg-accent/10 flex items-center justify-center font-serif text-9xl italic font-extralight text-background transition-all duration-700 group-hover:scale-105">
                    {project.id}
                 </div>
              </div>

              <div className={cn(
                "md:col-span-5 flex flex-col gap-8 pt-4",
                index % 2 !== 0 && "md:order-1 md:text-right md:items-end"
              )}>
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">{project.tag}</span>
                    <span className="w-1.5 h-1.5 bg-accent/20 rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">{project.type}</span>
                </div>
                <h2 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] tracking-tighter">
                    {project.title}
                </h2>
                <p className="text-sm md:text-base text-muted leading-relaxed max-w-sm">
                    {project.description}
                </p>
                <div className="editorial-underline text-[10px] font-bold uppercase tracking-[0.2em] w-fit">
                    Explore Case Study
                </div>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </div>
  );
}
