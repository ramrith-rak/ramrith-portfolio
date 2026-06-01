import { cn } from "@/lib/utils";
import React from "react";

interface TacticalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  corners?: ("tl" | "tr" | "bl" | "br")[];
  showScanline?: boolean;
  variant?: "obsidian" | "void" | "tactical";
}

export function TacticalCard({
  children,
  className,
  corners = [],
  showScanline = false,
  variant = "obsidian",
  ...props
}: TacticalCardProps) {
  const variantClasses = {
    obsidian: "bg-obsidian/20 hover:bg-obsidian/40",
    void: "bg-void/50 hover:bg-tactical-dim",
    tactical: "bg-tactical-dim",
  };

  const cornerClasses = {
    tl: "corner-tl",
    tr: "corner-tr",
    bl: "corner-bl",
    br: "corner-br",
  };

  return (
    <div
      className={cn(
        "tactical-border p-8 flex flex-col transition-colors duration-500 relative overflow-hidden",
        variantClasses[variant],
        corners.map((c) => cornerClasses[c]).join(" "),
        className
      )}
      {...props}
    >
      {showScanline && <div className="scanline" aria-hidden="true" />}
      {children}
    </div>
  );
}
