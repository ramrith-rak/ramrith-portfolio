import { cn } from "@/lib/utils";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { ClickableImage } from "@/components/image-lightbox";

export default function Home() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-32 md:py-48 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Hero */}
        <header className="mb-48 md:mb-72">
            <h1 className="font-serif text-7xl sm:text-8xl md:text-[10rem] font-light leading-[0.85] tracking-tighter mb-12">
                Ramrith Rakpoun<br />
                <i className="font-light italic">Design Engineer.</i>
            </h1>
            <p className="text-lg md:text-xl font-mono text-muted max-w-lg leading-relaxed ml-2">
                Crafting intentional digital experiences at the intersection of high-utility logic and soulful minimalism.
            </p>
        </header>

        {/* Vertical Asymmetric Project List */}
        <section className="space-y-64 md:space-y-96">
          {PROJECTS.filter(p => p.featured || PROJECTS.indexOf(p) < 3).map((project, index) => (
            <Link 
              key={project.id}
              href={`/projects/${project.id}`}
              className={cn(
                "group grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center no-underline text-inherit",
                index % 2 !== 0 && "md:flex-row-reverse"
              )}
            >
              {/* Image Container */}
              <div className={cn(
                "md:col-span-8 aspect-[16/10] rounded-sm border border-border overflow-hidden relative shadow-sm transition-all duration-700 group-hover:shadow-xl group-hover:shadow-accent/5",
                index % 2 !== 0 && "md:order-2"
              )}>
                 <ClickableImage
                   src={project.image}
                   alt={project.title}
                   className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
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
                <h2 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] tracking-tighter">
                    {project.title}
                </h2>
                <p className="text-sm md:text-base text-muted leading-relaxed max-w-sm">
                    {project.description}
                </p>
                <div className="editorial-underline text-[10px] font-bold uppercase tracking-[0.2em] w-fit">
                    Explore Work
                </div>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </div>
  );
}
