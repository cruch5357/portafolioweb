import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// base debe coincidir con el nombre del repositorio en GitHub Pages:
// https://cruch5357.github.io/portafolioweb/
export default defineConfig({
  base: "/portafolioweb/",
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "motion";
            if (id.includes("react-icons") || id.includes("lucide-react"))
              return "icons";
            if (id.includes("@radix-ui")) return "radix";
            return "react-vendor";
          }
        },
      },
    },
  },
});
