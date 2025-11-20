import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: Number(env.VITE_PORT) || 5173,
      open: env.VITE_OPEN === "true",
      strictPort: env.VITE_STRICT_PORT === "true",
    },

    define: {
      __APP_MODE__: JSON.stringify(mode),
    },

    build: {
      sourcemap: env.VITE_SOURCEMAP === "true",
      outDir: env.VITE_OUT_DIR || "dist",
    },
  };
});
