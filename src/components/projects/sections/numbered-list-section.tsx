export function NumberedListSection({
  heading,
  items,
}: {
  heading: string;
  items: { label: string; body?: string; subitems?: { label: string; body: string }[] }[];
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
      <div className="md:col-span-4">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">
          {heading}
        </h3>
      </div>
      <div className="md:col-span-8 space-y-12">
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex items-start gap-4 mb-3">
              <span className="text-[10px] font-bold text-accent tabular-nums mt-1 shrink-0">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <h4 className="font-serif text-xl md:text-2xl font-light leading-tight text-foreground">
                {item.label}
              </h4>
            </div>
            {item.body && (
              <p className="text-sm md:text-base leading-relaxed text-foreground/70 font-mono pl-10 mb-4">
                {item.body}
              </p>
            )}
            {item.subitems && item.subitems.length > 0 && (
              <ul className="pl-10 space-y-3">
                {item.subitems.map((sub, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-accent/50 rounded-full mt-2.5 shrink-0" />
                    <p className="text-sm md:text-base leading-relaxed text-foreground/70 font-mono">
                      <span className="text-foreground/90 font-medium">{sub.label}</span>
                      {": "}
                      {sub.body}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
