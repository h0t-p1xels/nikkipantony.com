import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import webmanifest from "astro-webmanifest"

// docs: https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: true,
			nesting: true
		}),
		react(),
		webmanifest({
			// docs: https://github.com/alextim/astro-lib/tree/main/packages/astro-webmanifest#readme
			name: "Nikki Pantony", // required
			icon: "./public/favicon.svg", // Favicon file name using automatic icon generation mode
			short_name: "Nikki Pantony",
			description:
				"digital product designer & developer at weareseed.studio based in Whitley Bay, England, UK.",
			start_url: "/", // index
			theme_color: "#fefefe", // ally-light-50
			background_color: "#0f172a", // ally-key-black-950
			display: "standalone"
		})
	]
})
