import type { IconType } from "react-icons";

export type TechCategory =
  | "IA / Machine Learning"
  | "Backend"
  | "Frontend"
  | "Cloud & Bases de Datos"
  | "Redes & Seguridad"
  | "Herramientas & DevOps";

export interface Tech {
  name: string;
  /** slug de simple-icons (react-icons/si) o lucide; si es concepto, usa `icon`. */
  icon?: IconType;
  /** color de marca opcional para el logo */
  brand?: string;
}

export interface TechGroup {
  category: TechCategory;
  accent: "ai" | "neutral";
  items: Tech[];
}

export type ProjectStatus = "IA / ML" | "Full-Stack" | "Vivo" | "Académico" | "Redes & Seguridad";

export interface Project {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  architecture: string;
  learnings: string;
  tech: string[];
  repoUrl?: string;
  images: string[];
}

export interface Certification {
  name: string;
  institution: string;
  date: string;
  competencies: string[];
  image?: string;
  status: "Obtenida" | "Próximamente";
}

export interface EducationItem {
  institution: string;
  program: string;
  period: string;
  note?: string;
}

export interface LeadershipItem {
  role: string;
  org: string;
  period: string;
  detail: string;
}

export interface Profile {
  name: string;
  fullName: string;
  role: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  cv: string;
  photo: string;
  availability: string;
  bio: string;
}
