import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Prerender every route to static HTML at build time — this is what
    // makes the site work on GitHub Pages (no server needed).
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
  // Skip the Cloudflare Worker build — GitHub Pages only serves static files.
  nitro: false,
});