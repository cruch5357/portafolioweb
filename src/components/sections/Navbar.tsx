const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#certificados", label: "Certificados" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-stroke bg-base/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-3.5">
        <a href="#top" className="font-display font-semibold tracking-tight">
          Alonso<span className="text-grad-ai">.</span>Cruz
        </a>
        <div className="hidden gap-7 text-sm text-ink-2 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
