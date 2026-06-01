import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { TacticalCard } from "@/components/tactical/tactical-card";
import { SectionHeader } from "@/components/tactical/section-header";
import { CONTACT_LINKS } from "@/lib/data";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <SectionHeader 
          tag="Get in Touch"
          title="Contact"
          description="Available for high-impact UX/UI design collaborations and creative projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: Contact Info Grid */}
          <div className="grid grid-cols-1 gap-4">
            {CONTACT_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="group"
              >
                <TacticalCard 
                  variant="void"
                  className="p-6 md:p-8 flex-row items-center justify-between hover:bg-tactical-dim transition-transform"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-tactical group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true">
                      <link.icon size={18} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] text-muted font-bold tracking-widest uppercase mb-1">{link.name}</span>
                      <span className="text-sm md:text-lg font-bold text-primary tracking-tight truncate">{link.value}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true">
                    <ArrowUpRight size={14} className="text-tactical" />
                  </div>
                </TacticalCard>
              </a>
            ))}
          </div>

          {/* Right: Message Prompt Area */}
          <TacticalCard 
            corners={["tr", "br"]} 
            className="p-8 md:p-12 bg-obsidian flex flex-col justify-between min-h-[360px] md:min-h-[400px]"
          >
            <div className="space-y-8">
               <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-tactical animate-pulse rounded-full" aria-hidden="true" />
                  <span className="text-[10px] text-tactical font-bold tracking-[0.2em] uppercase">Ready to connect</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tighter leading-tight uppercase">
                 Let&apos;s build<br />something great
               </h2>
               <p className="text-muted text-xs md:text-sm uppercase tracking-widest leading-loose max-w-md">
                 Currently accepting new project inquiries. Response time typically within 24-48 hours.
               </p>
            </div>
            
            <a 
              href="mailto:ramrith.rak@gmail.com"
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full md:w-fit bg-primary text-primary-foreground px-12 py-5 md:py-8 text-xs font-bold uppercase tracking-[0.2em] rounded-none hover:bg-neutral-50 transition-colors transition-transform h-auto mt-12 md:mt-0 flex items-center justify-center"
              )}
            >
              Send Message
            </a>
          </TacticalCard>
        </div>

      </div>
    </div>
  );
}
