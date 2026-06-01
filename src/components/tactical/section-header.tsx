import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/5 pb-12", className)}>
      <div className="space-y-4">
        <span className="text-tactical text-[10px] font-bold uppercase tracking-[0.4em]">{tag}</span>
        <h1 className="text-4xl md:text-7xl font-bold text-primary tracking-tighter uppercase leading-[0.9]">{title}</h1>
      </div>
      <p className="text-muted text-xs md:text-sm max-w-xs uppercase tracking-widest leading-relaxed">
        {description}
      </p>
    </div>
  );
}
