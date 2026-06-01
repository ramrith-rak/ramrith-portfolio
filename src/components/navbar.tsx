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
      "fixed top-0 z-[100] w-full transition-all duration-500",
      isOpen ? "bg-background" : "bg-background/80 backdrop-blur-xl"
    )}>
      <div className="container mx-auto flex h-24 items-center justify-between px-6 md:px-12 relative z-[101]">
        <Link 
          href="/" 
          className="font-serif text-3xl font-light tracking-tight text-foreground transition-opacity hover:opacity-70"
          onClick={() => setIsOpen(false)}
          aria-label="Ramrith Rakpoun Home"
        >
          Ramrith R.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-16" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-accent",
                pathname === item.path ? "text-foreground underline underline-offset-8 decoration-accent/50" : "text-muted"
              )}
              aria-current={pathname === item.path ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="flex md:hidden items-center justify-center p-2 text-foreground transition-colors"
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
          "fixed inset-0 top-0 z-[90] md:hidden bg-background transition-all duration-700 ease-in-out",
          isOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"
        )}
        aria-hidden={!isOpen}
      >
        <nav className="relative flex flex-col items-center justify-center h-full gap-12 p-6" aria-label="Mobile Navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-5xl font-serif font-light transition-all hover:text-accent",
                pathname === item.path ? "text-foreground italic" : "text-muted"
              )}
              aria-current={pathname === item.path ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
