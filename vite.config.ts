import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Set explicitly to "github-pages" by .github/workflows/deploy.yml.
// On Vercel (and everywhere else) this stays unset, so Nitro auto-detects
// the platform itself and keeps building its normal Vercel serverless output.
const isGithubPagesBuild = process.env["BUILD_TARGET"] === "github-pages";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    ...(isGithubPagesBuild && {
      // Prerender every route to static HTML at build time — this is what
      // makes the site work on GitHub Pages, which has no server.
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
    }),
  },
  // Only skip the server/Workers build for the GitHub Pages target.
  // Leaving this key out entirely everywhere else lets Vercel's build keep
  // working exactly as it did before.
  ...(isGithubPagesBuild && { nitro: false }),
});