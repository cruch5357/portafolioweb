import { Mail, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-stroke py-14 text-center">
      <p className="font-display text-lg font-medium">
        ¿Trabajamos juntos? <span className="text-grad-ai">Hablemos.</span>
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-xl border border-stroke-2 bg-glass-2 px-4 py-2.5 text-sm text-ink-2 backdrop-blur transition-colors hover:text-ink"
        >
          <Mail className="h-4 w-4" /> {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-stroke-2 bg-glass-2 px-4 py-2.5 text-sm text-ink-2 backdrop-blur transition-colors hover:text-ink"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-stroke-2 bg-glass-2 px-4 py-2.5 text-sm text-ink-2 backdrop-blur transition-colors hover:text-ink"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
      </div>
      <p className="mt-8 font-mono text-xs text-ink-3">
        © {new Date().getFullYear()} {profile.fullName} · Hecho con React + Vite + Tailwind
      </p>
    </footer>
  );
}
