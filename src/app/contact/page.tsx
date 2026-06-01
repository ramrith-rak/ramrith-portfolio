import { CONTACT_LINKS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description:
    "Open for UX/UI design collaborations, creative engineering projects, and consultation.",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-32 md:py-48 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto space-y-48">
        <header className="max-w-4xl space-y-10">
          <h1 className="font-serif text-7xl md:text-9xl font-light leading-[0.85] tracking-tighter">
            Let&apos;s start
            <br />
            <i className="font-light italic">a conversation.</i>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
            Open for UX/UI design collaborations, creative engineering projects,
            and consultation. Based in Bangkok, working worldwide.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          {/* Contact Links */}
          <div className="md:col-span-5">
            <div className="divide-y divide-border">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center justify-between py-5 px-1 -mx-1 rounded-sm transition-colors duration-300 hover:bg-accent/5 first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <link.icon
                      size={17}
                      strokeWidth={1.5}
                      className="text-accent shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-base md:text-lg text-foreground font-light truncate">
                        {link.value}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground/20 shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Editorial CTA */}
          <div className="md:col-span-7 bg-foreground text-background p-12 md:p-24 rounded-sm flex flex-col justify-between gap-10 min-h-[560px]">
            <div className="space-y-12">
              <h2 className="font-serif text-6xl md:text-8xl font-light leading-[0.95] tracking-tighter">
                Drop a line,
                <br />
                let&apos;s talk <i className="font-light">work.</i>
              </h2>
              <p className="text-base md:text-lg opacity-50 leading-relaxed max-w-sm">
                Currently accepting new project inquiries. I typically respond
                within 24–48 hours.
              </p>
            </div>

            <a
              href="mailto:ramrith.rak@gmail.com"
              className="w-fit bg-accent text-foreground px-16 py-8 text-[10px] font-bold uppercase tracking-[0.4em] rounded-md hover:scale-105 transition-all duration-500 shadow-xl shadow-accent/20"
            >
              Send Message
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
