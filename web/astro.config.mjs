import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build
    format: "file"
  },
  integrations: [prefetch({
    // Prefetch all links
    selector: "a"
  })]
});