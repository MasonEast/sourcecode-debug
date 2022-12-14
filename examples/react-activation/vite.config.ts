import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupReplace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        "process.env.NODE_ENV": JSON.stringify("development"),
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      "react-router": path.resolve(
        __dirname,
        "../../packages/react-router/react-router/index.ts"
      ),
      "react-router-dom": path.resolve(
        __dirname,
        "../../packages/react-router/react-router-dom/index.tsx"
      ),
      "react-activation": path.resolve(
        __dirname,
        "../../packages/react-activation/src/index.js"
      ),
    },
  },
});
