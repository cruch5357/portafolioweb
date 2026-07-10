import { Cpu } from "lucide-react";
import { TECH_ICON } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface TechChipProps {
  name: string;
  variant?: "ai" | "neutral";
  size?: "sm" | "md";
}

/** Badge de tecnología con logo (simple-icons/lucide) e interacción de hover. */
export function TechChip({ name, variant = "neutral", size = "md" }: TechChipProps) {
  const Icon = TECH_ICON[name] ?? Cpu;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border font-mono transition-colors",
        size === "sm" ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs",
        variant === "ai"
          ? "border-[#8B5CF6]/30 bg-[#8B5CF6]/[0.08] text-[#C4B5FD] hover:bg-[#8B5CF6]/[0.14]"
          : "border-stroke bg-white/[0.04] text-ink-2 hover:bg-white/[0.08] hover:text-ink"
      )}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
      {name}
    </span>
  );
}

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  lead?: string;
  titleId?: string;
}

export function SectionHeading({ index, label, title, lead, titleId }: SectionHeadingProps) {
  return (
    <div className="mb-9">
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-3">
        {index} · {label}
      </div>
      <h2 id={titleId} className="font-display text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {lead && <p className="mt-2 max-w-2xl text-ink-2">{lead}</p>}
    </div>
  );
}
