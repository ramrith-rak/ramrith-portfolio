"use client";

import { useState, useCallback, useEffect } from "react";
import { X } from "lucide-react";
import { asset } from "@/lib/utils";

export function ClickableImage({
  src,
  alt,
  className,
  loading,
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  const [open, setOpen] = useState(false);
  const href = asset(src);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <img
        src={href}
        alt={alt}
        className={className}
        loading={loading}
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer" }}
      />
      {open && (
        <div
          className="fixed inset-0 z-[200] bg-foreground/95 flex items-center justify-center p-8 md:p-16 animate-in fade-in duration-200"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 z-[210] p-3 text-background/70 hover:text-background transition-colors"
            aria-label="Close"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          <img
            src={href}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
