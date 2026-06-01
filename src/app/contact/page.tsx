import { CONTACT_LINKS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description: "Open for high-impact UX/UI design collaborations, creative engineering projects, and strategic consultation.",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-32 md:py-48 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto space-y-48">
        
        <header className="max-w-4xl space-y-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
                Availability & Connect
            </span>
            <h1 className="font-serif text-7xl md:text-9xl font-light leading-[0.85] tracking-tighter">
                Let&apos;s start<br />
                <i className="font-light italic">a conversation.</i>
            </h1>
            <p className="text-lg md:text-xl font-mono text-muted max-w-xl leading-relaxed">
                Open for high-impact UX/UI design collaborations, creative engineering projects, and strategic consultation.
            </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-24 items-start">
          {/* Contact Links */}
          <div className="md:col-span-5 space-y-4">
            {CONTACT_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="group flex items-center justify-between p-8 border border-border rounded-sm bg-card transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent transition-all group-hover:bg-accent group-hover:text-background">
                    <link.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent opacity-60 mb-1">{link.name}</div>
                    <div className="text-xl tracking-tight text-foreground font-light">{link.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            ))}
          </div>

          {/* Editorial CTA */}
          <div className="md:col-span-7 bg-foreground text-background p-12 md:p-24 rounded-sm flex flex-col justify-between min-h-[500px] shadow-2xl shadow-foreground/10">
            <div className="space-y-12">
               <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent animate-pulse rounded-full" />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Ready to build</span>
               </div>
               <h2 className="font-serif text-6xl md:text-8xl font-light leading-[0.95] tracking-tighter">
                 Drop a line,<br />start a <i className="font-light">spark.</i>
               </h2>
               <p className="text-base md:text-lg opacity-60 leading-relaxed max-w-sm">
                 Currently accepting new project inquiries. Response time typically within 24-48 hours.
               </p>
            </div>
            
            <a 
              href="mailto:ramrith.rak@gmail.com"
              className="w-fit bg-accent text-foreground px-16 py-8 text-[10px] font-bold uppercase tracking-[0.4em] rounded-md hover:scale-105 transition-all shadow-xl shadow-accent/20"
            >
              Send Message
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
