import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Healio-version-1/",
  build: {
    outDir: "dist"
  }
});
