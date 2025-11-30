import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const config = defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    vanillaExtractPlugin({
      identifiers: "short",
    }),
    {
      name: "cloudflare-vanilla-extract-compat",
      enforce: "pre",
      configResolved(config) {
        if (config.environments?.ssr?.resolve) {
          config.environments.ssr.resolve.external = [];
        }
      },
    },
    devtools(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart(),
    viteReact(),
  ],
});

export default config;
