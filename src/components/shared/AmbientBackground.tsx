/** Fondo ambiental fijo: halos difusos + rejilla técnica con máscara radial. */
export function AmbientBackground() {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-36 -top-44 h-[620px] w-[620px] rounded-full bg-[#5B8CFF] opacity-[0.20] blur-[120px]" />
        <div className="absolute -right-40 top-28 h-[520px] w-[520px] rounded-full bg-[#8B5CF6] opacity-[0.20] blur-[120px]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, #000 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, #000 20%, transparent 75%)",
        }}
      />
    </>
  );
}
