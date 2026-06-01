import Link from "next/link";
import { NAV_ITEMS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-obsidian py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-tactical font-bold text-lg tracking-tighter mb-4">RAKPOUN</h2>
            <p className="text-muted text-xs leading-relaxed max-w-sm uppercase tracking-wider">
              Engineering the intersection of logic and aesthetic. 
              Portfolio of Ramrith Rakpoun (Ram). Built with precision using Next.js and Tailwind CSS.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-6">Directory</h4>
            <nav className="flex flex-col gap-4 text-[10px] text-muted font-bold uppercase tracking-widest">
              {NAV_ITEMS.map((item) => (
                <Link key={item.path} href={item.path} className="hover:text-tactical transition-colors">
                  {item.name.charAt(0) + item.name.slice(1).toLowerCase()}
                </Link>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-6">Social</h4>
            <nav className="flex flex-col gap-4 text-[10px] text-muted font-bold uppercase tracking-widest">
              <a href="https://www.linkedin.com/in/ramrith-rak/" target="_blank" rel="noopener noreferrer" className="hover:text-tactical transition-colors">LinkedIn</a>
              <a href="https://github.com/ramrith-rak" target="_blank" rel="noopener noreferrer" className="hover:text-tactical transition-colors">GitHub</a>
              <a href="mailto:ramrith.rak@gmail.com" className="hover:text-tactical transition-colors">Email</a>
            </nav>
          </div>
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8 text-[9px] md:text-[10px] text-muted/50 font-bold tracking-[0.4em] uppercase text-center md:text-left">
          <div>© 2026 RAMRITH RAKPOUN. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-4 text-tactical/40">
            <span>PRECISION INTERFACES</span>
            <span className="w-1 h-1 bg-tactical/20 rounded-full" aria-hidden="true" />
            <span>EST. 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
