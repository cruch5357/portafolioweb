import { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Compass } from "lucide-react";
import { profile, techStack, stats, education, leadership } from "@/data/portfolioData";
import { TechChip, SectionHeading } from "@/components/shared/TechChip";
import { cn } from "@/lib/utils";
import { fadeUp, stagger, inView } from "@/lib/motion";

/** Tile del bento con glow que sigue el cursor. */
function Tile({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-xl2 border border-stroke bg-glass p-6 backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-[3px] hover:border-stroke-2 hover:bg-glass-2",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx,50%) var(--my,0%), rgba(123,162,255,0.10), transparent 40%)",
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export function BentoSection() {
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="scroll-mt-20 py-14">
      <SectionHeading
        index="01"
        label="Perfil"
        title="Sobre mí"
        titleId="sobre-mi-title"
        lead="Identidad, formación y trayectoria de liderazgo en una rejilla modular."
      />

      <motion.div
        {...inView}
        variants={stagger}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Bio grande */}
        <Tile className="sm:col-span-2 lg:row-span-2">
          <h3 className="font-display text-lg font-semibold">{profile.fullName}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-3">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{profile.bio}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <TechChip name="Machine Learning" variant="ai" size="sm" />
            <TechChip name="Python" size="sm" />
            <TechChip name="Django" size="sm" />
            <TechChip name="React" size="sm" />
          </div>
        </Tile>

        {/* Stats */}
        <Tile>
          <div className="font-display text-[44px] font-bold tracking-tight text-grad-ai">
            {stats.projects}
          </div>
          <div className="font-mono text-[13px] text-ink-3">proyectos_reales</div>
        </Tile>
        <Tile>
          <div className="font-display text-[44px] font-bold tracking-tight text-grad-ai">
            {stats.certifications}
          </div>
          <div className="font-mono text-[13px] text-ink-3">certificaciones</div>
        </Tile>

        {/* Educación */}
        <Tile className="sm:col-span-2">
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
            <GraduationCap className="h-4 w-4" /> Educación
          </div>
          <ul className="space-y-2.5">
            {education.map((e) => (
              <li key={e.institution} className="flex items-baseline justify-between gap-4 text-sm">
                <span>
                  <span className="text-ink">{e.institution}</span>
                  <span className="text-ink-2"> — {e.program}</span>
                  {e.note && (
                    <span className="ml-2 rounded border border-stroke px-1.5 py-0.5 font-mono text-[10px] text-ink-3">
                      {e.note}
                    </span>
                  )}
                </span>
                <span className="shrink-0 font-mono text-xs text-ink-3">{e.period}</span>
              </li>
            ))}
          </ul>
        </Tile>

        {/* Liderazgo */}
        <Tile className="sm:col-span-2 lg:col-span-4">
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
            <Compass className="h-4 w-4" /> Liderazgo
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {leadership.map((l) => (
              <div key={l.role}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-medium text-ink">{l.role}</span>
                  <span className="shrink-0 font-mono text-xs text-ink-3">{l.period}</span>
                </div>
                <p className="mt-1 text-sm text-ink-2">{l.detail}</p>
              </div>
            ))}
          </div>
        </Tile>
      </motion.div>

      {/* Stack */}
      <section id="stack" aria-labelledby="stack-title" className="scroll-mt-20 pt-16">
        <SectionHeading
          index="02"
          label="Tecnologías"
          title="Stack técnico"
          titleId="stack-title"
          lead="Clasificado por dominio y respaldado por proyectos reales en GitHub."
        />
        <motion.div {...inView} variants={stagger} className="grid gap-4 sm:grid-cols-2">
          {techStack.map((group) => (
            <Tile key={group.category}>
              <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((t) => (
                  <TechChip key={t.name} name={t.name} variant={group.accent} size="sm" />
                ))}
              </div>
            </Tile>
          ))}
        </motion.div>
      </section>
    </section>
  );
}
