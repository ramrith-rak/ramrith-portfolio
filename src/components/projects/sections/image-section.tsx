import { ClickableImage } from "@/components/image-lightbox";

export function ImageSection({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <section>
      <div className="aspect-[16/9] bg-[#F5F3F0] rounded-sm border border-border overflow-hidden relative shadow-sm hover:shadow-[0_8px_32px_-4px_rgba(113,146,192,0.12)] hover:-translate-y-1 transition-all duration-700">
        <ClickableImage
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full p-6 md:p-10 object-contain transition-all duration-700"
          loading="lazy"
        />
      </div>
      {caption && (
        <p className="text-xs font-mono text-muted mt-4 text-center">{caption}</p>
      )}
    </section>
  );
}
