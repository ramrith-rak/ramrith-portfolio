import { ClickableImage } from "@/components/image-lightbox";

export function ComparisonSection({
  heading,
  before,
  after,
  body,
}: {
  heading: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  body?: string;
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
      <div className="md:col-span-4">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">
          {heading}
        </h3>
      </div>
      <div className="md:col-span-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-muted mb-3">
              Before
            </span>
            <div className="aspect-[4/3] rounded-sm border border-border overflow-hidden relative bg-card/50">
              <ClickableImage
                src={before.src}
                alt={before.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-3">
              After
            </span>
            <div className="aspect-[4/3] rounded-sm border border-accent/30 overflow-hidden relative shadow-sm shadow-accent/5">
              <ClickableImage
                src={after.src}
                alt={after.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {body && (
          <p className="text-sm md:text-base leading-relaxed text-foreground/70 font-mono">
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
