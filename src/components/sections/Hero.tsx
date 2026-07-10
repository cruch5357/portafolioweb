import { motion } from "framer-motion";
import { Download, Mail, Check, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolioData";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { fadeUp, stagger } from "@/lib/motion";

export function Hero() {
  const { copied, copy } = useCopyToClipboard();

  return (
    <header className="relative grid items-center gap-10 pb-16 pt-20 sm:pt-24 lg:grid-cols-12 lg:gap-8">
      {/* Columna de contenido */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="text-center lg:col-span-7 lg:text-left"
      >
        <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
          <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-brand/25 bg-emerald-brand/[0.07] px-4 py-1.5 font-mono text-[13px] text-emerald-brand backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-brand animate-pulseRing" />
            {profile.availability}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display text-[clamp(36px,5.4vw,62px)] font-bold leading-[1.05] tracking-[-0.03em]"
        >
          Construyo software con{" "}
          <span className="text-grad-ai">Inteligencia Artificial</span> y{" "}
          <span className="text-grad-data">Ciencia de Datos</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-xl text-lg text-ink-2 lg:mx-0"
        >
          {profile.role} enfocado en Machine Learning, desarrollo Full-Stack y
          sistemas inteligentes de datos.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap justify-center gap-3.5 lg:justify-start"
        >
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-grad-btn px-5 py-3 text-[15px] font-semibold text-[#0a0a0f] shadow-[0_8px_30px_-8px_rgba(123,162,255,0.6)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_rgba(139,92,246,0.7)]"
          >
            <Download className="h-[17px] w-[17px]" /> Descargar CV
          </a>

          <button
            onClick={() => copy(profile.email)}
            aria-label="Copiar correo electrónico"
            className="inline-flex items-center gap-2 rounded-xl border border-stroke-2 bg-glass-2 px-5 py-3 text-[15px] font-medium text-ink backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.09]"
          >
            {copied ? (
              <>
                <Check className="h-[17px] w-[17px] text-emerald-brand" /> ¡Copiado!
              </>
            ) : (
              <>
                <Mail className="h-[17px] w-[17px]" /> Copiar correo
              </>
            )}
          </button>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-stroke-2 bg-glass-2 px-5 py-3 text-[15px] font-medium text-ink backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.09]"
          >
            <Linkedin className="h-[17px] w-[17px]" /> LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* Columna de foto */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative mx-auto w-full max-w-[360px] lg:col-span-5 lg:max-w-[420px]"
      >
        {/* Glow detrás */}
        <div
          aria-hidden
          className="absolute -inset-6 rounded-[32px] bg-grad-ai opacity-25 blur-3xl"
        />
        {/* Marco con borde gradiente */}
        <div className="relative rounded-[26px] bg-grad-ai p-[1.5px] shadow-[0_30px_80px_-30px_rgba(139,92,246,0.55)]">
          <div className="overflow-hidden rounded-[25px] bg-base-2">
            <img
              src={profile.photo}
              alt={`Retrato de ${profile.fullName}`}
              width={945}
              height={1183}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </div>
        {/* Chip flotante */}
        <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-stroke-2 bg-base/80 px-4 py-2 font-mono text-xs text-ink-2 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-brand" />
          Duoc UC · Ing. Informática
        </div>
      </motion.div>
    </header>
  );
}
