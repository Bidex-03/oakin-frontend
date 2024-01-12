import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api": "https://mern-backend-6cyt.onrender.com/api",
      "/api": "http://localhost:4000",
    },
  },
});