import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import ViteCssModules from "vite-plugin-css-modules";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  experimental: {
    importHints: true,
  },
});
