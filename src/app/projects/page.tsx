import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TacticalCard } from "@/components/tactical/tactical-card";
import { SectionHeader } from "@/components/tactical/section-header";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <SectionHeader 
          tag="Case Studies"
          title="Selected Work"
          description="Exploration of digital frontiers through rigorous design engineering and precision logic."
        />

        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project) => (
            <TacticalCard 
              key={project.id} 
              className="group grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-12 p-6 md:p-12"
            >
              {/* Visual Placeholder (left) */}
              <div className="md:col-span-3 h-[240px] md:h-[400px] bg-void relative overflow-hidden order-2 md:order-1 mt-8 md:mt-0" aria-hidden="true">
                 <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-1000">
                    {/* Abstract Grid / UI Stub */}
                    <div className="p-6 md:p-12 h-full flex flex-col gap-6">
                        <div className="flex gap-4">
                            <div className="w-16 h-4 bg-tactical/20" />
                            <div className="w-32 h-4 bg-white/5" />
                        </div>
                        <div className="grid grid-cols-3 gap-6 h-full">
                            <div className="col-span-2 bg-white/5 border border-white/5" />
                            <div className="bg-white/5 border border-white/5" />
                        </div>
                    </div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-transparent hidden md:block" />
                 <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-tactical/30 font-bold text-6xl md:text-8xl tracking-tighter select-none">
                   {project.id}
                 </div>
              </div>

              {/* Info (right) */}
              <div className="md:col-span-2 flex flex-col justify-center order-1 md:order-2">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <span className="text-tactical text-[10px] font-bold uppercase tracking-[0.3em]">{project.tag}</span>
                  <div className="h-[1px] w-8 bg-white/10" aria-hidden="true" />
                  <span className="text-muted text-[10px] font-bold uppercase tracking-widest">{project.type}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter mb-4 md:mb-6 group-hover:text-tactical transition-colors uppercase leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted text-xs md:text-sm leading-relaxed uppercase tracking-widest mb-8 md:mb-10">
                  {project.description}
                </p>
                <Link 
                  href={`/projects/${project.id}`}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full md:w-fit rounded-none border-white/10 px-8 py-5 md:py-6 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground h-auto text-center justify-center"
                  )}
                >
                  View Case Study
                </Link>
              </div>
            </TacticalCard>
          ))}
        </div>

      </div>
    </div>
  );
}
