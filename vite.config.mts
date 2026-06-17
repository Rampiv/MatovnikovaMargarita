import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    open: true,
    watch: {
      usePolling: true,
      interval: 1000,
    },
    hmr: {
      overlay: true,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Игнорируем warnings от сторонних библиотек
        if (
          warning.code === "INVALID_ANNOTATION" &&
          warning.message?.includes("@pbe/react-yandex-maps")
        ) {
          return
        }
        if (
          warning.code === "EVAL" &&
          warning.message?.includes("lottie-web")
        ) {
          return
        }
        warn(warning)
      },
    },
  },
})
