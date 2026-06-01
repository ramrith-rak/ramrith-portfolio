export function PullQuoteSection({ text, attribution }: { text: string; attribution?: string }) {
  return (
    <section className="max-w-3xl mx-auto py-16 md:py-24">
      <blockquote className="font-serif text-3xl md:text-4xl font-light italic leading-tight text-foreground/80 text-center">
        &ldquo;{text}&rdquo;
      </blockquote>
      {attribution && (
        <p className="text-xs font-mono text-muted text-center mt-6 tracking-widest uppercase">
          {attribution}
        </p>
      )}
    </section>
  );
}
