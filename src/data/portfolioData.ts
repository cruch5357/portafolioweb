import {
  SiPython, SiDjango, SiFastapi, SiStreamlit, SiTypescript, SiJavascript,
  SiReact, SiVite, SiTailwindcss, SiIonic, SiAngular, SiHtml5, SiCss,
  SiFirebase, SiSqlite, SiMysql, SiGit, SiGithub, SiDocker, SiHuggingface,
  SiWireshark, SiCapacitor,
} from "react-icons/si";
import {
  BrainCircuit, Sparkles, Layers, ScanSearch, Trees, Boxes, Database,
  Network, Radio, LineChart, Cloud, PackageSearch,
} from "lucide-react";
import type { IconType } from "react-icons";
import { asset } from "@/lib/asset";
import type {
  Profile, TechGroup, Project, Certification, EducationItem, LeadershipItem,
} from "@/types";

/* ── Registro central de tecnologías (name → icono) ───────────────── */
export const TECH_ICON: Record<string, IconType> = {
  Python: SiPython, Django: SiDjango, FastAPI: SiFastapi, Streamlit: SiStreamlit,
  TypeScript: SiTypescript, JavaScript: SiJavascript, React: SiReact, Vite: SiVite,
  TailwindCSS: SiTailwindcss, "Ionic Angular": SiIonic, Angular: SiAngular,
  HTML5: SiHtml5, CSS3: SiCss, Firebase: SiFirebase, Firestore: SiFirebase,
  SQLite: SiSqlite, MySQL: SiMysql, Git: SiGit, GitHub: SiGithub, Docker: SiDocker,
  HuggingFace: SiHuggingface, Wireshark: SiWireshark, TShark: SiWireshark,
  Capacitor: SiCapacitor,
  // conceptos (lucide)
  "Machine Learning": BrainCircuit, "Isolation Forest": Trees,
  "Anomaly Detection": ScanSearch, RAG: Layers, LLMs: Sparkles,
  LlamaIndex: Boxes, ChromaDB: Database, Ollama: PackageSearch,
  Scapy: Network, WebSockets: Radio, Recharts: LineChart, "Azure AI": Cloud,
};

/* ── Perfil ───────────────────────────────────────────────────────── */
export const profile: Profile = {
  name: "Alonso Cruz",
  fullName: "Alonso Gaspar Cruz Farías",
  role: "Estudiante de Ingeniería en Informática",
  location: "Santiago, Chile",
  email: "alonsocruzfarias@gmail.com",
  linkedin: "https://linkedin.com/in/alonsocruz",
  github: "https://github.com/cruch5357",
  cv: asset("assets/cv/CV_AlonsoCruz.pdf"),
  photo: asset("assets/profile/fotoperfil.webp"),
  availability: "Disponible para Práctica Profesional",
  bio: "Estudiante de Ingeniería en Informática con una profunda pasión por el desarrollo de software, la Inteligencia Artificial, el Machine Learning y la Ciencia de Datos. He liderado y colaborado en proyectos técnicos complejos, combinando el desarrollo Full-Stack con la resolución de problemas mediante modelos inteligentes. Sumo una sólida base en liderazgo y trabajo en equipo, forjada en más de 7 años de Scouts y en la directiva del Centro de Alumnos.",
};

/* ── Stack tecnológico clasificado ────────────────────────────────── */
export const techStack: TechGroup[] = [
  {
    category: "IA / Machine Learning",
    accent: "ai",
    items: [
      { name: "Machine Learning" }, { name: "Isolation Forest" },
      { name: "Anomaly Detection" }, { name: "RAG" }, { name: "LLMs" },
      { name: "LlamaIndex" }, { name: "ChromaDB" }, { name: "Ollama" },
      { name: "HuggingFace" }, { name: "Azure AI" },
    ],
  },
  {
    category: "Backend",
    accent: "neutral",
    items: [
      { name: "Python" }, { name: "Django" }, { name: "FastAPI" },
      { name: "Streamlit" },
    ],
  },
  {
    category: "Frontend",
    accent: "neutral",
    items: [
      { name: "TypeScript" }, { name: "JavaScript" }, { name: "React" },
      { name: "Vite" }, { name: "TailwindCSS" }, { name: "Ionic Angular" },
      { name: "HTML5" }, { name: "CSS3" }, { name: "Recharts" },
    ],
  },
  {
    category: "Cloud & Bases de Datos",
    accent: "neutral",
    items: [
      { name: "Firebase" }, { name: "Firestore" }, { name: "SQLite" },
      { name: "MySQL" }, { name: "ChromaDB" },
    ],
  },
  {
    category: "Redes & Seguridad",
    accent: "neutral",
    items: [
      { name: "Scapy" }, { name: "TShark" }, { name: "WebSockets" },
    ],
  },
  {
    category: "Herramientas & DevOps",
    accent: "neutral",
    items: [
      { name: "Git" }, { name: "GitHub" }, { name: "Docker" },
      { name: "Capacitor" },
    ],
  },
];

/* ── Proyectos (ordenados para liderar con IA/ML) ─────────────────── */
export const projects: Project[] = [
  {
    slug: "ml-network-intrusion-detection-system",
    name: "ML Intrusion Detection",
    category: "IA · Machine Learning",
    status: "IA / ML",
    summary:
      "IDS que detecta tráfico de red malicioso con Machine Learning no supervisado sobre tráfico real.",
    problem:
      "Detectar comportamientos anómalos en la red sin depender de firmas conocidas, capturando y analizando el tráfico real del equipo.",
    architecture:
      "Pipeline en vivo: captura con TShark → construcción de network flows → extracción de features (paquetes, bytes, puertos, IPs) → Isolation Forest para detección de anomalías → alertas → dashboard interactivo en Streamlit.",
    learnings:
      "Detección de anomalías no supervisada, ingeniería de features sobre flujos de red y construcción de un pipeline de datos en tiempo semi-real que procesa en ciclos cortos.",
    tech: ["Python", "Isolation Forest", "Anomaly Detection", "TShark", "Streamlit", "Machine Learning"],
    repoUrl: "https://github.com/cruch5357/ml-network-intrusion-detection-system",
    images: [asset("assets/projects/ml-network-intrusion-detection-system/demo.webp")],
  },
  {
    slug: "rag-llm-chatbot",
    name: "RAG LLM Chatbot",
    category: "IA · LLMs",
    status: "IA / ML",
    summary:
      "Chatbot con arquitectura RAG que responde sobre documentos propios usando un LLM y una base vectorial.",
    problem:
      "Responder preguntas con precisión sobre bases de conocimiento externas, reduciendo alucinaciones mediante recuperación aumentada.",
    architecture:
      "Ingesta de documentos (TXT/PDF/MD) → embeddings con HuggingFace → indexación en ChromaDB → recuperación semántica con LlamaIndex → generación con un LLM local vía Ollama → interfaz en Streamlit.",
    learnings:
      "Flujo completo de un sistema RAG: chunking, embeddings, búsqueda semántica y orquestación de un LLM ejecutado localmente.",
    tech: ["Python", "RAG", "LLMs", "LlamaIndex", "ChromaDB", "Ollama", "HuggingFace", "Streamlit"],
    repoUrl: "https://github.com/cruch5357/rag-llm-chatbot",
    images: [asset("assets/projects/rag-llm-chatbot/demo.webp")],
  },
  {
    slug: "packet-analyzer-netscope",
    name: "NetScope",
    category: "Redes · Full-Stack",
    status: "Full-Stack",
    summary:
      "Analizador de paquetes de red en vivo con FastAPI, WebSockets y React.",
    problem:
      "Visualizar el comportamiento de la red en tiempo real —protocolos, IPs top y paquetes— de forma interactiva.",
    architecture:
      "Backend FastAPI + Scapy captura paquetes y los transmite por WebSockets; frontend React + Vite + Recharts renderiza gráficos en vivo, con filtros BPF y exportación a PCAP.",
    learnings:
      "Streaming en tiempo real con WebSockets, captura con Scapy y clasificación de protocolos, integrando un backend asíncrono con un frontend reactivo (mismo stack de este portafolio).",
    tech: ["Python", "FastAPI", "Scapy", "WebSockets", "React", "Vite", "TailwindCSS", "Recharts"],
    repoUrl: "https://github.com/cruch5357/packet-analyzer-netscope",
    images: [asset("assets/projects/packet-analyzer-netscope/demo.webp")],
  },
  {
    slug: "passenger-monitoring-system",
    name: "MoniCarro",
    category: "Data · Mobile",
    status: "Activo",
    summary:
      "Monitoreo del flujo de pasajeros por estación con detección de anomalías, orientado al Metro de Santiago.",
    problem:
      "Falta de visibilidad sobre la circulación de pasajeros y dificultad para detectar anomalías operativas con datos dispersos.",
    architecture:
      "App Ionic Angular (TypeScript) con Firebase/Firestore: registro diario por estación, gráficos de circulación y detección de anomalías diarias y mensuales para apoyar decisiones operativas.",
    learnings:
      "Análisis y visualización de datos en una app móvil, con persistencia en Firestore y lógica de detección de anomalías temporales.",
    tech: ["Ionic Angular", "TypeScript", "Firebase", "Firestore"],
    repoUrl: "https://github.com/cruch5357/passenger-monitoring-system",
    images: [asset("assets/projects/passenger-monitoring-system/demo.webp")],
  },
  {
    slug: "qr-attendance-system",
    name: "RegistrApp",
    category: "Mobile · Cloud",
    status: "Activo",
    summary:
      "App móvil de registro de asistencia por códigos QR con almacenamiento centralizado en la nube.",
    problem:
      "Reemplazar el registro manual de asistencia —lento y propenso a errores— por una solución digital y trazable.",
    architecture:
      "Ionic Angular + Capacitor escanea QR desde la cámara; Firebase Authentication valida usuarios y Firestore almacena fecha, hora, usuario y ubicación de cada registro.",
    learnings:
      "Integración de cámara nativa vía Capacitor, autenticación y base NoSQL en tiempo real, cuidando la trazabilidad de los datos.",
    tech: ["Ionic Angular", "TypeScript", "Firebase", "Capacitor", "Firestore"],
    repoUrl: "https://github.com/cruch5357/qr-attendance-system",
    images: [asset("assets/projects/qr-attendance-system/scan.webp")],
  },
  {
    slug: "ml-image-classifier",
    name: "ML Image Classifier",
    category: "IA · Computer Vision",
    status: "IA / ML",

    summary:
      "Clasificador de imágenes utilizando modelos de Machine Learning para identificar automáticamente distintas categorías.",

    problem:
      "Construir un pipeline de clasificación que permita entrenar, evaluar y utilizar modelos capaces de reconocer imágenes de distintas clases.",

    architecture:
      "Pipeline de preprocesamiento → entrenamiento del modelo → evaluación mediante métricas de clasificación → inferencia sobre nuevas imágenes.",

    learnings:
      "Preparación de datasets, entrenamiento supervisado, evaluación de modelos y aplicación práctica de técnicas de visión computacional.",

    tech: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "NumPy",
      "FastApi",
      "Tailwind"
    ],

    repoUrl:
      "https://github.com/cruch5357/ml-image-classifier",

    images: [
      asset("assets/projects/ml-image-classifier/demo.webp"),
    ],
  },
  {
    slug: "vuln-api-pentesting-lab",
    name: "Vuln API Pentesting Lab",
    category: "Ciberseguridad · Backend",
    status: "Redes & Seguridad",
    summary:
      "Laboratorio de APIs vulnerables diseñado para practicar pentesting sobre vulnerabilidades comunes de OWASP API Security.",

    problem:
      "Disponer de un entorno seguro para aprender técnicas ofensivas sobre APIs REST sin comprometer sistemas reales.",

    architecture:
      "API desarrollada en Python con endpoints deliberadamente vulnerables. Permite ejecutar pruebas de autenticación, autorización, inyección, exposición de información y manipulación de recursos utilizando herramientas de pentesting.",

    learnings:
      "Comprensión práctica de OWASP API Security Top 10, análisis de vulnerabilidades, explotación controlada y fortalecimiento de aplicaciones backend.",

    tech: [
      "Python",
      "FastAPI",
      "REST API",
      "OWASP API Security",
      "JWT",
      "Pentesting"
    ],

    repoUrl:
      "https://github.com/cruch5357/vuln-api-pentesting-lab",

    images: [
      asset("assets/projects/vuln-api-pentesting-lab/demo.webp"),
    ],
  },
  {
    slug: "caelestis-web-platform",
    name: "Caelestis",
    category: "Full-Stack Web",
    status: "Académico",
    summary:
      "Plataforma web para un santuario de animales: membresías, donaciones y tienda con flujo de pago.",
    problem:
      "Centralizar donaciones, membresías y compras gestionadas manualmente, con trazabilidad de pagos y usuarios.",
    architecture:
      "Django (Python) con arquitectura MVT y base relacional (SQLite); frontend HTML5/CSS3/JavaScript: autenticación, membresías (Bronce/Plata/Oro), carrito, flujo de pago y boleta digital.",
    learnings:
      "Desarrollo full-stack con Django: modelos, vistas, plantillas, autenticación y la lógica de negocio de un e-commerce.",
    tech: ["Django", "Python", "SQLite", "HTML5", "CSS3", "JavaScript"],
    repoUrl: "https://github.com/cruch5357/caelestis-web-platform",
    images: [
      asset("assets/projects/caelestis-web-platform/demo1.webp"),
      asset("assets/projects/caelestis-web-platform/demo2.webp"),
      asset("assets/projects/caelestis-web-platform/demo3.webp"),
    ],
  },
  {
    slug: "bike-rental-web-system",
    name: "MasterBikes",
    category: "Full-Stack Web",
    status: "Académico",
    summary:
      "Plataforma web para arriendo y gestión de bicicletas con cuentas de usuario y soporte.",
    problem:
      "Prototipar una plataforma de arriendo con registro, autenticación y módulos de soporte aplicando desarrollo web real.",
    architecture:
      "Django (MVC) con SQLite y frontend HTML5/CSS3/JavaScript: registro, login, simulación de arriendo, recuperación de contraseña y formulario de contacto.",
    learnings:
      "Mi base en Django: manejo de formularios, autenticación básica e integración frontend-backend en un proyecto estructurado.",
    tech: ["Django", "Python", "SQLite", "HTML5", "CSS3", "JavaScript"],
    repoUrl: "https://github.com/cruch5357/bike-rental-web-system",
    images: [asset("assets/projects/bike-rental-web-system/demo.webp")],
  },
];

/* ── Certificaciones ──────────────────────────────────────────────── */
export const certifications: Certification[] = [
  {
    name: "Azure AI Fundamentals (AI-900)",
    institution: "Microsoft",
    date: "2024",
    competencies: ["IA en la nube", "Machine Learning", "Computer Vision", "NLP"],
    image: asset("assets/certs/azure-ai-900.webp"),
    status: "Obtenida",
  },
  {
    name: "PCEP — Certified Entry-Level Python Programmer",
    institution: "Python Institute",
    date: "2024",
    competencies: ["Lógica de programación", "Estructuras de datos", "Algoritmos"],
    image: asset("assets/certs/pcep.webp"),
    status: "Obtenida",
  },
  {
    name: "Python Essentials 1",
    institution: "Cisco / Python Institute",
    date: "2023",
    competencies: ["Sintaxis de Python", "Tipos de datos", "Control de flujo", "Funciones"],
    image: asset("assets/certs/python-essentials-1.webp"),
    status: "Obtenida",
  },
  {
    name: "Scrum Foundation (SFPC)",
    institution: "CertiProf",
    date: "Próximamente",
    competencies: ["Marco Scrum", "Roles ágiles", "Artefactos", "Mejora continua"],
    status: "Próximamente",
  },
];

/* ── Educación y liderazgo ────────────────────────────────────────── */
export const education: EducationItem[] = [
  { institution: "Duoc UC", program: "Ingeniería en Informática", period: "2023 – 2026" },
  { institution: "Universidad Diego Portales", program: "Ing. Civil Informática y Telecom.", period: "2022", note: "Incompleta" },
  { institution: "Colegio Notre Dame", program: "Enseñanza media · Científico-humanista", period: "2010 – 2021" },
];

export const leadership: LeadershipItem[] = [
  { role: "Líder · Guías y Scouts", org: "Colegio Notre Dame", period: "7+ años", detail: "Trayectoria por las 4 divisiones del grupo, hasta Subjefe de Patrulla y asistente de animación." },
  { role: "Directiva · Centro de Alumnos", org: "Colegio Notre Dame", period: "2020 – 2021", detail: "Organización de actividades y representación estudiantil ante la institución." },
];

/* Estadísticas rápidas para el bento */
export const stats = {
  projects: projects.length,
  certifications: certifications.filter((c) => c.status === "Obtenida").length,
};
