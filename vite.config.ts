import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Capacitor + Vercel ready Vite config.
// - base "./" is required for Capacitor so the app can load assets from the
//   device filesystem (file:///android_asset/public/...).  Vercel also handles
//   relative bases fine so this works for both targets.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
  build: {
    // Capacitor needs the output in the "dist" folder (default) which we'll
    // point to via capacitor.config.ts webDir.
    outDir: "dist",
  },
});
