export function LearningsSection({ heading, items }: { heading?: string; items: string[] }) {
  return (
    <section className="max-w-3xl mx-auto">
      {heading && (
        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-10 text-center">
          {heading}
        </h3>
      )}
      <ol className="space-y-8">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-6">
            <span className="font-serif text-4xl md:text-5xl font-light text-accent/30 leading-none shrink-0">
              {(i + 1).toString().padStart(2, "0")}
            </span>
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-mono pt-1">
              {item}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
