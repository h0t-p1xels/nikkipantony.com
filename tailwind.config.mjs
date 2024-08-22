/** @type {import('tailwindcss').Config} */

// tailwind color generator: https://uicolors.app/create

export const darkMode = ["class"]
export const content = [
	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
]
export const theme = {
	colors: {
		"ally-cyan": {
			50: "#ecfcff",
			100: "#cff8fe",
			200: "#a5f0fc",
			300: "#67e6f9",
			400: "#22d3ee",
			500: "#06b9d4",
			600: "#089bb2",
			700: "#0e7f90",
			800: "#156875",
			900: "#165963",
			950: "#083c44"
		},
		"ally-yellow": {
			50: "#fefde8",
			100: "#fffcc2",
			200: "#fff687",
			300: "#ffe943",
			400: "#ffd60a",
			500: "#efbe03",
			600: "#ce9300",
			700: "#a46804",
			800: "#88510b",
			900: "#734210",
			950: "#432205"
		},
		"ally-magenta": {
			50: "#fff0f8",
			100: "#ffe3f4",
			200: "#ffc6e9",
			300: "#ff98d5",
			400: "#ff58b7",
			500: "#ff2799",
			600: "#ff0071",
			700: "#df0057",
			800: "#b80048",
			900: "#98033f",
			950: "#5f0021"
		},
		"ally-key-black": {
			50: "#f0f7fe",
			100: "#deecfb",
			200: "#c4e0f9",
			300: "#9cccf4",
			400: "#6dafed",
			500: "#4b90e6",
			600: "#3674da",
			700: "#2d60c8",
			800: "#2a4fa3",
			900: "#274481",
			950: "#0f172a"
		},
		"ally-light": {
			50: "#fefefe",
			100: "#efefef",
			200: "#dcdcdc",
			300: "#bdbdbd",
			400: "#989898",
			500: "#7c7c7c",
			600: "#656565",
			700: "#525252",
			800: "#464646",
			900: "#3d3d3d",
			950: "#292929"
		}
	},
	screens: {
		xs: "480px",
		// => @media (min-width: 480px) { ... }
		sm: "640px",
		// => @media (min-width: 640px) { ... }
		md: "768px",
		// => @media (min-width: 768px) { ... }
		lg: "1024px",
		// => @media (min-width: 1024px) { ... }
		xl: "1280px",
		// => @media (min-width: 1280px) { ... }
		"2xl": "1536px"
		// => @media (min-width: 1536px) { ... }
	},
	container: {
		center: true,
		padding: "2rem",
		screens: {
			"2xl": "1400px"
		}
	},
	extend: {
		keyframes: {
			"accordion-down": {
				from: { height: "0" },
				to: {
					height: "var(--radix-accordion-content-height)"
				}
			},
			"accordion-up": {
				from: {
					height: "var(--radix-accordion-content-height)"
				},
				to: { height: "0" }
			}
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out"
		}
	}
}
export const plugins = [require("tailwindcss-animate")]
