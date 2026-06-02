import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, CONTACT_LINKS } from "@/lib/data";
import { PROJECT_CONTENT } from "@/lib/projects";
import { SectionRenderer } from "@/components/projects/section-renderer";
import { ClickableImage } from "@/components/image-lightbox";
import { asset, basePath } from "@/lib/utils";
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
  const imageUrl = project.image ? `${basePath}${project.image}` : undefined;
  return {
    title: `${project.title} — ${project.tag}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.tag}`,
      description: project.description,
      ...(imageUrl && { images: [{ url: imageUrl, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.tag}`,
      description: project.description,
      ...(imageUrl && { images: [imageUrl] }),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  const content = PROJECT_CONTENT[id];
  if (!project || !content) notFound();

  const emailLink = CONTACT_LINKS.find((l) => l.name === "Email")?.href ?? "mailto:ramrith.rak@gmail.com";

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

        {/* Project Visual */}
        {project.image ? (
          <div className="aspect-[16/9] bg-[#F5F3F0] rounded-sm border border-border overflow-hidden relative shadow-sm hover:shadow-[0_8px_32px_-4px_rgba(113,146,192,0.12)] hover:-translate-y-1 transition-all duration-700 mb-32 md:mb-48">
            <ClickableImage
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full p-8 md:p-12 object-contain transition-all duration-700"
            />
          </div>
        ) : null}

        {/* PDF Download (for projects with an asset like Petopia) */}
        {"asset" in project && project.asset && (
          <div className="mb-32 md:mb-48 text-center">
            <a
              href={asset(project.asset)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 rounded-md text-xs font-bold uppercase tracking-[0.3em] transition-all hover:bg-accent hover:text-foreground hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/20"
            >
              Download Full Thesis (PDF)
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          </div>
        )}

        {/* Context Bar */}
        {(content.role || content.timeline || content.tools) && (
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-32 md:mb-48">
            <div className="md:col-span-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">
                Context
              </h3>
            </div>
            <div className="md:col-span-8 flex flex-wrap gap-12">
              {content.role && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-2">Role</div>
                  <div className="text-sm font-mono text-foreground/80">{content.role}</div>
                </div>
              )}
              {content.timeline && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-2">Timeline</div>
                  <div className="text-sm font-mono text-foreground/80">{content.timeline}</div>
                </div>
              )}
              {content.tools && content.tools.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-2">Tools</div>
                  <div className="text-sm font-mono text-foreground/80">{content.tools.join(" · ")}</div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Rich Case Study Content */}
        <div className="space-y-32 md:space-y-48">
          {content.sections.map((section, i) => (
            <SectionRenderer key={i} section={section} />
          ))}
        </div>

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
            href={emailLink}
            className="group inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 rounded-md text-xs font-bold uppercase tracking-[0.3em] transition-all hover:bg-accent hover:text-foreground hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/20"
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
