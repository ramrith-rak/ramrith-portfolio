import { ClickableImage } from "@/components/image-lightbox";

export function ImageGridSection({
  heading,
  images,
}: {
  heading?: string;
  images: { src: string; alt: string; caption?: string }[];
}) {
  return (
    <section>
      {heading && (
        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8">
          {heading}
        </h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, i) => (
          <div key={i}>
            <div className="aspect-[16/10] bg-[#F5F3F0] rounded-sm border border-border overflow-hidden relative shadow-sm hover:shadow-[0_8px_32px_-4px_rgba(113,146,192,0.12)] hover:-translate-y-1 transition-all duration-700">
              <ClickableImage
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full p-6 md:p-8 object-contain transition-all duration-700"
                loading="lazy"
              />
            </div>
            {img.caption && (
              <p className="text-xs font-mono text-muted mt-3">{img.caption}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
