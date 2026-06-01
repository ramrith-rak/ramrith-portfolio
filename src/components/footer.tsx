import Link from "next/link";
import { NAV_ITEMS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full bg-background pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center gap-12 mb-32">
          <h2 className="font-serif text-6xl md:text-9xl font-light tracking-tighter leading-none max-w-4xl">
            Let&apos;s build something <i className="font-light">intentional.</i>
          </h2>
          <a 
            href="mailto:ramrith.rak@gmail.com"
            className="inline-block bg-primary text-primary-foreground px-12 py-6 rounded-md text-xs font-bold uppercase tracking-[0.3em] transition-all hover:bg-accent hover:text-foreground hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/20"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-t border-border pt-12 text-[10px] font-bold uppercase tracking-widest text-muted">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <span className="text-foreground font-serif text-xl normal-case tracking-tight font-light">Ramrith Rakpoun.</span>
            <nav className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link key={item.path} href={item.path} className="hover:text-accent transition-colors">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="https://linkedin.com/in/ramrith-rak" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://github.com/ramrith-rak" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            <span>© 2026 — INTENTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
