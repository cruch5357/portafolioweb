import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X, BadgeCheck, Clock } from "lucide-react";
import { certifications } from "@/data/portfolioData";
import type { Certification } from "@/types";
import { SectionHeading } from "@/components/shared/TechChip";
import { cn } from "@/lib/utils";
import { fadeUp, stagger, inView } from "@/lib/motion";

export function CertificationsSection() {
  const [zoom, setZoom] = useState<Certification | null>(null);

  return (
    <section id="certificados" aria-labelledby="certificados-title" className="scroll-mt-20 py-14">
      <SectionHeading
        index="04"
        label="Credenciales"
        title="Certificaciones"
        titleId="certificados-title"
        lead="Diplomas verificables y la próxima meta ágil en camino."
      />

      <motion.div
        {...inView}
        variants={stagger}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {certifications.map((c) => {
          const soon = c.status === "Próximamente";
          return (
            <motion.div
              key={c.name}
              variants={fadeUp}
              className={cn(
                "flex flex-col overflow-hidden rounded-2xl border bg-glass backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-[3px] hover:border-stroke-2",
                soon ? "border-dashed border-stroke-2" : "border-stroke"
              )}
            >
              {/* Preview del diploma */}
              {c.image ? (
                <button
                  onClick={() => setZoom(c)}
                  className="group relative block h-32 overflow-hidden border-b border-stroke bg-[#0e1018]"
                  aria-label={`Ver diploma: ${c.name}`}
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top opacity-85 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e1018]/80 to-transparent" />
                </button>
              ) : (
                <div className="grid h-32 place-items-center border-b border-dashed border-stroke bg-[#8B5CF6]/[0.05]">
                  <Clock className="h-7 w-7 text-[#C4B5FD]/60" />
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                <div className="font-mono text-[11px] text-ink-3">{c.institution}</div>
                <h4 className="mt-1.5 flex-1 font-display text-[15px] font-medium leading-tight">
                  {c.name}
                </h4>
                <span
                  className={cn(
                    "mt-3 inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-[11px]",
                    soon
                      ? "border-[#8B5CF6]/28 bg-[#8B5CF6]/[0.12] text-[#C4B5FD]"
                      : "border-emerald-brand/22 bg-emerald-brand/[0.1] text-emerald-brand"
                  )}
                >
                  {soon ? <Clock className="h-3 w-3" /> : <BadgeCheck className="h-3 w-3" />}
                  {c.status}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Lightbox del diploma */}
      <Dialog.Root open={zoom !== null} onOpenChange={(o) => !o && setZoom(null)}>
        <AnimatePresence>
          {zoom?.image && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount aria-describedby={undefined}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-stroke-2 bg-[#0b0d13]/95 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
                >
                  <div className="flex items-center justify-between border-b border-stroke px-5 py-4">
                    <Dialog.Title className="font-display text-base font-medium">
                      {zoom.name}
                    </Dialog.Title>
                    <Dialog.Close
                      aria-label="Cerrar"
                      className="grid h-9 w-9 place-items-center rounded-[9px] border border-stroke-2 bg-glass-2 text-ink-2 transition-colors hover:text-ink"
                    >
                      <X className="h-[18px] w-[18px]" />
                    </Dialog.Close>
                  </div>
                  <img src={zoom.image} alt={zoom.name} className="max-h-[75vh] w-full object-contain" />
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}
