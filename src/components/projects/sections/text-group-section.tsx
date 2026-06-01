export function TextGroupSection({ heading, paragraphs }: { heading: string; paragraphs: string[] }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
      <div className="md:col-span-4">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">
          {heading}
        </h3>
      </div>
      <div className="md:col-span-8 space-y-6">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/80 font-mono">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
