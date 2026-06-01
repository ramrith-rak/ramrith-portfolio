import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TacticalCard } from "@/components/tactical/tactical-card";
import { EXPERIENCE_METRIC, PROJECTS } from "@/lib/data";

export default function Home() {
  const featuredProject = PROJECTS.find(p => p.featured) || PROJECTS[0];

  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Tactical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min md:auto-rows-[240px]">
          
          {/* Hero Section */}
          <TacticalCard 
            corners={["tl", "tr"]} 
            showScanline 
            className="md:col-span-3 md:row-span-2 p-8 md:p-12 justify-end bg-obsidian/40"
          >
            <div className="absolute top-6 left-6 md:top-8 md:left-8 text-[10px] text-tactical font-bold flex items-center gap-2 uppercase tracking-widest">
              <span className="w-2 h-2 bg-tactical animate-pulse rounded-full" aria-hidden="true" />
              UX/UI Design Portfolio
            </div>
            
            <div className="relative z-20 mt-16 md:mt-0">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-primary mb-6 tracking-tighter leading-[0.9]">
                RAMRITH<br />RAKPOUN
              </h1>
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <p className="text-muted text-base md:text-lg max-w-sm leading-relaxed uppercase tracking-tight">
                  UX/UI Designer & Engineering Generalist. Bridging business logic and high-fidelity interfaces through AI-assisted development.
                </p>
                <div className="hidden md:block h-[1px] flex-grow bg-white/10" aria-hidden="true" />
                <Link 
                  href="/projects"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "bg-tactical hover:bg-tactical/90 text-primary px-6 py-5 md:px-10 md:py-8 text-xs font-bold uppercase tracking-[0.2em] rounded-none transition-colors transition-transform hover:scale-105 active:scale-95 h-auto w-full md:w-auto text-center justify-center"
                  )}
                >
                  View My Work <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </TacticalCard>

          {/* Metric Bento */}
          <TacticalCard corners={["tr"]} className="md:col-span-1 md:row-span-1 justify-between">
            <span className="text-[10px] text-muted font-bold tracking-widest uppercase">{EXPERIENCE_METRIC.label}</span>
            <div className="text-5xl font-bold text-tactical tracking-tighter">{EXPERIENCE_METRIC.value}</div>
            <p className="text-[9px] text-muted leading-relaxed uppercase tracking-tighter">
              {EXPERIENCE_METRIC.description}
            </p>
          </TacticalCard>

          {/* About Shortcut */}
          <TacticalCard 
            corners={["br"]} 
            variant="void"
            className="md:col-span-1 md:row-span-1 justify-between group cursor-pointer"
          >
            <span className="text-[10px] text-muted font-bold tracking-widest uppercase">Contact</span>
            <div className="space-y-1" aria-hidden="true">
              <div className="h-1 w-full bg-white/5" />
              <div className="h-1 w-2/3 bg-white/5" />
              <div className="h-1 w-full bg-tactical/20" />
            </div>
            <Link href="/contact" className="text-[10px] font-bold tracking-widest uppercase text-primary flex items-center justify-between">
              GET IN TOUCH <span aria-hidden="true">→</span>
            </Link>
          </TacticalCard>

          {/* Featured Project Preview (Brief) */}
          <TacticalCard className="md:col-span-4 p-10 flex flex-col md:flex-row items-center justify-between gap-12 group cursor-pointer">
             <div className="flex flex-col gap-2">
               <span className="text-[10px] text-tactical font-bold uppercase tracking-[0.3em]">Latest Case Study</span>
               <h3 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter uppercase">{featuredProject.title}</h3>
             </div>
             <Link 
               href="/projects"
               className={cn(
                 buttonVariants({ variant: "outline" }),
                 "rounded-none border-white/10 px-8 py-5 md:py-6 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground h-auto w-full md:w-auto text-center justify-center"
               )}
             >
               View Details
             </Link>
          </TacticalCard>

        </div>
      </div>
    </div>
  );
}
