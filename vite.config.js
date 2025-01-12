import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5500,
  },
  preview: {
    port: 5500,
  },
  resolve: {
    alias: [
      // eslint-disable-next-line
      { find: "@/src", replacement: path.resolve(__dirname, "src") },
    ],
  },
});
