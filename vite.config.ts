import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/react-mobx-todolist/",
  build: {
    outDir: "build",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "static/assets/[name].[hash].js",
        chunkFileNames: "static/assets/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.names?.[0]
          if (
            ["png", "jpg", "jpeg", "gif", "svg", "ico", "webp"].includes(
              ext ?? ""
            )
          ) {
            return "static/images/[name].[hash][extname]"
          }
          if (["css"].includes(ext ?? "")) {
            return "static/assets/[name].[hash][extname]"
          }
          return "static/assets/[name].[hash][extname]"
        }
      }
    }
  }
})
