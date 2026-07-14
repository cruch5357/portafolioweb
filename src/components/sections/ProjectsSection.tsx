import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolioData";
import type { Project } from "@/types";
import { SectionHeading } from "@/components/shared/TechChip";
import { cn } from "@/lib/utils";
import { fadeUp, stagger, inView } from "@/lib/motion";

// El modal (con galería + Radix) se carga sólo al abrir el primer proyecto.
const ProjectModal = lazy(() =>
  import("./ProjectModal").then((m) => ({ default: m.ProjectModal }))
);

const statusPill: Record<string, string> = {
  "IA / ML": "border-[#8B5CF6]/30 bg-[#8B5CF6]/[0.14] text-[#C4B5FD]",
  "Full-Stack": "border-stroke-2 bg-white/[0.06] text-ink-2",
  Activo: "border-emerald-brand/25 bg-emerald-brand/[0.1] text-emerald-brand",
  Académico: "border-stroke-2 bg-white/[0.06] text-ink-2",
};

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="scroll-mt-20 py-14">
      <SectionHeading
        index="03"
        label="Proyectos"
        title="Trabajo seleccionado"
        titleId="proyectos-title"
        lead="Cada tarjeta abre un detalle con galería, narrativa técnica y repositorio."
      />

      <motion.div
        {...inView}
        variants={stagger}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <motion.button
            key={p.slug}
            variants={fadeUp}
            onClick={() => setActive(p)}
            className="group text-left"
          >
            <article className="flex h-full flex-col overflow-hidden rounded-xl2 border border-stroke bg-glass backdrop-blur-[10px] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-stroke-2">
              <div className="relative h-36 overflow-hidden border-b border-stroke bg-[#0e1018]">
                <img
                  src={p.images[0]}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e1018] via-transparent to-transparent" />
                <span
                  className={cn(
                    "absolute left-3 top-3 rounded-md border px-2.5 py-1 font-mono text-[10.5px]",
                    statusPill[p.status]
                  )}
                >
                  {p.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  {/* Título en blanco/gris muy claro */}
                  <h4 className="font-display text-base font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{p.name}</h4>
                  {/* Ícono de la flecha combinando con los textos */}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-white" />
                </div>
                {/* Descripción del proyecto en gris claro para lectura suave */}
                <p className="mt-1.5 flex-1 text-sm text-slate-300">{p.summary}</p>
                {/* Categoría en gris un poco más oscuro */}
                <div className="mt-3 font-mono text-[11px] text-slate-400">{p.category}</div>
              </div>
            </article>
          </motion.button>
        ))}
      </motion.div>

      <Suspense fallback={null}>
        <ProjectModal project={active} onClose={() => setActive(null)} />
      </Suspense>
    </section>
  );
}
