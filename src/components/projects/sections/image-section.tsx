import { ClickableImage } from "@/components/image-lightbox";

export function ImageSection({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <section>
      <div className="aspect-[16/9] rounded-sm border border-border overflow-hidden relative shadow-sm">
        <ClickableImage src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>
      {caption && (
        <p className="text-xs font-mono text-muted mt-4 text-center">{caption}</p>
      )}
    </section>
  );
}
