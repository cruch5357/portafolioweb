/**
 * Devuelve la ruta correcta de un asset ubicado en /public,
 * anteponiendo el base de Vite (import.meta.env.BASE_URL).
 * En dev => "/assets/..."  |  En GitHub Pages => "/portafolioweb/assets/..."
 * Uso: asset("assets/profile/fotoperfil.webp")
 */
export function asset(relativePath: string): string {
  const base = import.meta.env.BASE_URL; // termina en "/"
  const clean = relativePath.replace(/^\/+/, "");
  return `${base}${clean}`;
}
