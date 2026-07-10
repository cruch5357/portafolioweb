# Portafolio · Alonso Cruz

Portafolio profesional (SPA) — **React + Vite + TypeScript + TailwindCSS + Framer Motion + shadcn/ui (Radix)**.
Optimizado para **GitHub Pages**: https://cruch5357.github.io/portafolioweb/

---

## Desarrollo local

```bash
npm install
npm run dev
```
Abrir: **http://localhost:5173/portafolioweb/** (incluye el subpath del `base`).

## Producción

```bash
npm run build     # genera /dist
npm run preview   # previsualiza el build
```

---

## Despliegue a GitHub Pages (automático)

Ya está todo configurado. Solo hay **un paso manual, una única vez**:

1. Subir el proyecto al repositorio `portafolioweb`:
   ```bash
   git init
   git add .
   git commit -m "Portafolio"
   git branch -M main
   git remote add origin https://github.com/cruch5357/portafolioweb.git
   git push -u origin main
   ```

2. En GitHub -> Settings -> Pages -> Build and deployment -> Source: elegir **"GitHub Actions"**.

A partir de ahi, cada `push` a `main` compila y publica el sitio automaticamente
(workflow en `.github/workflows/deploy.yml`). No se necesita rama `gh-pages`.

### Alternativa manual (opcional)
```bash
npm run deploy    # compila y publica /dist en la rama gh-pages con el paquete gh-pages
```

---

## Estructura

```
src/
  components/
    sections/   Hero, Bento, Proyectos, Modal, Certificaciones, Footer, Navbar
    shared/     TechChip, SectionHeading, AmbientBackground
  data/         portfolioData.ts  (toda la info del portafolio)
  hooks/        useCopyToClipboard
  lib/          utils (cn), asset (rutas base), motion (variantes)
  types/        interfaces TypeScript
public/assets/  profile, cv, certs, projects  (imagenes optimizadas en WebP)
```

## Editar contenido
Todo el contenido (perfil, stack, proyectos, certificaciones) vive en
`src/data/portfolioData.ts`. No hace falta tocar los componentes para actualizar datos.
