export function BulletListSection({ heading, items }: { heading: string; items: string[] }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
      <div className="md:col-span-4">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">
          {heading}
        </h3>
      </div>
      <div className="md:col-span-8">
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm md:text-base leading-relaxed text-foreground/80 font-mono">
              <span className="w-1.5 h-1.5 bg-accent/40 rounded-full mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
