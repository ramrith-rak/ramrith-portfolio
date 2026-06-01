import type { Metadata } from "next";
import { ClickableImage } from "@/components/image-lightbox";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "UX/UI Designer from Thailand — bridging business goals and development through intentional design and AI-assisted engineering.",
};

export default function About() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-32 md:py-48 animate-in fade-in duration-1000">
      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-48 md:mb-72 items-center">
          <div className="md:col-span-5">
            <div className="aspect-square rounded-sm border border-border overflow-hidden relative shadow-sm">
              <ClickableImage
                src="/profile.jpg"
                alt="Ramrith Rakpoun"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <h1 className="font-serif text-6xl md:text-8xl font-light leading-[0.9] tracking-tighter mb-8">
              Hi, I&apos;m<br />
              <i className="font-light italic">Ramrith.</i>
            </h1>
            <p className="text-lg md:text-xl font-mono text-foreground/75 max-w-lg leading-relaxed">
              UX/UI Designer from Thailand with over 2 years of experience in enterprise ERP and financial software. I work across the full product cycle — gathering requirements, designing interfaces, and building features with AI-assisted engineering — so the final software works, not just looks good.
            </p>
            <div className="flex items-center gap-6 mt-10">
              <a
                href={asset("/resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-md text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-accent hover:text-foreground hover:-translate-y-0.5"
              >
                Download Resume
              </a>
              <a
                href="/contact"
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted hover:text-accent transition-colors"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </header>

        {/* About Me */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-32 md:mb-48">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight mb-6">
              About Me
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-mono">
              Good software starts with understanding the problem before touching the interface. I begin every project by listening — to stakeholders, to users, to the constraints most people skip. Then I design and build with those constraints as the foundation, not an afterthought.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-mono">
              What sets me apart is that I don&apos;t stop at design files. I work inside the codebase, manage database tables, and ship features alongside developers. The result is software that works the way it was designed to — without anything lost in translation.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-24 md:space-y-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <span className="font-serif text-7xl md:text-8xl font-light leading-none text-foreground/[0.06] select-none" aria-hidden="true">01</span>
              <h3 className="font-serif text-2xl md:text-3xl font-light tracking-tight mt-3">Business Analysis</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-mono">
                I collect requirements directly from clients and design system workflows using UML. Before any pixel is placed, I understand what the business needs and how the software should behave.
              </p>
            </div>
          </div>

          <hr className="border-t border-border" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <span className="font-serif text-7xl md:text-8xl font-light leading-none text-foreground/[0.06] select-none" aria-hidden="true">02</span>
              <h3 className="font-serif text-2xl md:text-3xl font-light tracking-tight mt-3">UX/UI Design</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-mono">
                I design clean, easy-to-use interfaces for web and mobile apps based on real user needs. Every screen, flow, and interaction is grounded in research and designed for the person using it.
              </p>
            </div>
          </div>

          <hr className="border-t border-border" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <span className="font-serif text-7xl md:text-8xl font-light leading-none text-foreground/[0.06] select-none" aria-hidden="true">03</span>
              <h3 className="font-serif text-2xl md:text-3xl font-light tracking-tight mt-3">UX Engineering</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-mono">
                I manage database tables in DBeaver and use Claude Code to build functional UI screens in C# and .NET Blazor. This helps me work smoothly alongside developers and launch software features faster. I am always ready to learn new tools and love building software that is practical, user-friendly, and delivered quickly.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
