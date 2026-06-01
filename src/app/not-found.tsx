import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-32 md:py-48 animate-in fade-in duration-1000">
      <div className="max-w-4xl mx-auto space-y-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
          Error 404
        </span>

        <h1 className="font-serif text-7xl md:text-9xl font-light leading-[0.85] tracking-tighter">
          Page not<br />
          <i className="font-light italic">found.</i>
        </h1>

        <p className="text-lg md:text-xl font-mono text-muted max-w-xl leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block bg-primary text-primary-foreground px-12 py-6 rounded-md text-xs font-bold uppercase tracking-[0.3em] transition-all hover:bg-accent hover:text-foreground hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/20"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
