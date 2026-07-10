import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/types";
import { TechChip } from "@/components/shared/TechChip";
import { cn } from "@/lib/utils";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const statusStyle: Record<string, string> = {
  "IA / ML": "border-[#8B5CF6]/30 bg-[#8B5CF6]/[0.14] text-[#C4B5FD]",
  "Full-Stack": "border-stroke-2 bg-white/[0.06] text-ink-2",
  Activo: "border-emerald-brand/25 bg-emerald-brand/[0.1] text-emerald-brand",
  Académico: "border-stroke-2 bg-white/[0.06] text-ink-2",
};

export function ProjectModal({ project, onClose }: Props) {
  const [idx, setIdx] = useState(0);
  useEffect(() => setIdx(0), [project]);

  const open = project !== null;
  const images = project?.images ?? [];
  const go = (d: number) => setIdx((i) => (i + d + images.length) % images.length);

  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <AnimatePresence>
        {open && project && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[20px] border border-stroke-2 bg-gradient-to-b from-[#141620]/95 to-[#0b0d13]/95 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
              >
                {/* Cabecera */}
                <div className="flex items-center justify-between border-b border-stroke px-6 py-5">
                  <div className="min-w-0">
                    <Dialog.Title className="flex items-center gap-3 font-display text-xl font-semibold">
                      <span className="truncate">{project.name}</span>
                      <span
                        className={cn(
                          "shrink-0 rounded-md border px-2.5 py-1 font-mono text-[11px]",
                          statusStyle[project.status]
                        )}
                      >
                        {project.status}
                      </span>
                    </Dialog.Title>
                    <p className="mt-1 font-mono text-xs text-ink-3">{project.category}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 pl-3">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Ver repositorio en GitHub"
                        className="grid h-9 w-9 place-items-center rounded-[9px] border border-stroke-2 bg-glass-2 text-ink-2 transition-colors hover:text-ink"
                      >
                        <Github className="h-[18px] w-[18px]" />
                      </a>
                    )}
                    <Dialog.Close
                      aria-label="Cerrar"
                      className="grid h-9 w-9 place-items-center rounded-[9px] border border-stroke-2 bg-glass-2 text-ink-2 transition-colors hover:text-ink"
                    >
                      <X className="h-[18px] w-[18px]" />
                    </Dialog.Close>
                  </div>
                </div>

                {/* Cuerpo con scroll */}
                <div className="overflow-y-auto px-6 py-6">
                  {/* Galería */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl border border-stroke bg-[#0e1018]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={idx}
                        src={images[idx]}
                        alt={`${project.name} — captura ${idx + 1}`}
                        loading="lazy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="max-h-[340px] w-full object-contain"
                      />
                    </AnimatePresence>
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={() => go(-1)}
                          aria-label="Anterior"
                          className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-stroke-2 bg-black/50 text-ink backdrop-blur transition-colors hover:bg-black/70"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => go(1)}
                          aria-label="Siguiente"
                          className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-stroke-2 bg-black/50 text-ink backdrop-blur transition-colors hover:bg-black/70"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                          {images.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setIdx(i)}
                              aria-label={`Ir a captura ${i + 1}`}
                              className={cn(
                                "h-1.5 rounded-full transition-all",
                                i === idx ? "w-4 bg-[#7BA2FF]" : "w-1.5 bg-white/25"
                              )}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Narrativa técnica */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Block title="El problema" text={project.problem} />
                    <Block title="Arquitectura" text={project.architecture} />
                    <div className="sm:col-span-2">
                      <Block title="Aprendizajes" text={project.learnings} />
                    </div>
                  </div>

                  {/* Tecnologías */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <TechChip
                        key={t}
                        name={t}
                        size="sm"
                        variant={project.status === "IA / ML" ? "ai" : "neutral"}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h5 className="mb-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
        {title}
      </h5>
      <p className="text-sm leading-relaxed text-ink-2">{text}</p>
    </div>
  );
}
