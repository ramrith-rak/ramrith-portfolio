import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — ${project.tag}`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="container mx-auto px-6 md:px-12 py-32 md:py-48 animate-in fade-in duration-1000">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link
          href="/projects"
          className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-muted hover:text-accent transition-colors mb-24"
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.5}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Projects
        </Link>

        {/* Project Hero */}
        <header className="mb-32 md:mb-48">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              {project.tag}
            </span>
            <span className="w-1.5 h-1.5 bg-accent/20 rounded-full" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
              {project.type}
            </span>
          </div>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-[8rem] font-light leading-[0.85] tracking-tighter mb-12 max-w-5xl">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl font-mono text-muted max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Project Visual Placeholder */}
        <div className="aspect-[16/9] bg-card rounded-sm border border-border overflow-hidden relative shadow-sm mb-32 md:mb-48">
          <div className="absolute inset-0 bg-accent/10 flex items-center justify-center">
            <span className="font-serif text-[12rem] md:text-[20rem] italic font-extralight text-background select-none">
              {project.id}
            </span>
          </div>
        </div>

        {/* Project Details Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-32">
          <div className="md:col-span-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">
              Overview
            </h3>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="text-base md:text-lg leading-relaxed text-foreground/80">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-2">
                  Category
                </div>
                <div className="text-sm font-mono">{project.tag}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-2">
                  Type
                </div>
                <div className="text-sm font-mono">{project.type}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-2">
                  Project ID
                </div>
                <div className="text-sm font-mono">{project.id}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial CTA */}
        <div className="border-t border-border pt-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
              Interested in this work?
            </h2>
            <p className="text-sm font-mono text-muted mt-4">
              Let&apos;s discuss how a similar approach could solve your design challenges.
            </p>
          </div>
          <a
            href="mailto:ramrith.rak@gmail.com"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-md text-xs font-bold uppercase tracking-[0.3em] transition-all hover:bg-accent hover:text-foreground hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/20"
          >
            Start a Conversation
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
