"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn(
      "sticky top-0 z-[100] w-full border-b duration-500 transition-[background-color,border-color]",
      isOpen ? "bg-void border-transparent transition-none" : "bg-void/80 backdrop-blur-xl border-white/5"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-6 relative z-[101]">
        <Link 
          href="/" 
          className="group flex items-center gap-3 font-bold tracking-tighter text-tactical"
          onClick={() => setIsOpen(false)}
          aria-label="Ramrith Rakpoun Home"
        >
          <div 
            className="flex h-8 w-8 items-center justify-center border border-tactical/30 bg-tactical/5 transition-colors group-hover:bg-tactical group-hover:text-primary-foreground"
            aria-hidden="true"
          >
            <span className="text-xs">R</span>
          </div>
          <span className="text-sm tracking-[0.2em] text-primary">RAKPOUN</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.3em] transition-colors hover:text-tactical",
                pathname === item.path ? "text-tactical" : "text-muted"
              )}
              aria-current={pathname === item.path ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="flex md:hidden items-center justify-center p-2 text-primary hover:text-tactical transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-0 z-[90] md:hidden bg-void transition-[transform,opacity,visibility] duration-500 ease-in-out",
          isOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"
        )}
        aria-hidden={!isOpen}
      >
        <nav className="relative flex flex-col items-center justify-start h-full gap-8 p-6 pt-32" aria-label="Mobile Navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-bold uppercase tracking-[0.3em] transition-colors hover:text-tactical",
                pathname === item.path ? "text-tactical border-b border-tactical" : "text-muted"
              )}
              aria-current={pathname === item.path ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
          <div className="absolute bottom-12 left-0 w-full px-6 flex flex-col items-center gap-4">
             <div className="w-full h-[1px] bg-white/5" />
             <span className="text-[10px] text-muted tracking-widest uppercase">Precision UX/UI Design</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
