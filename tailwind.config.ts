import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"brand-yellow": "#FEC62E",
				"brand-red": "#FF5C5C",
				"light-pink": "#F8C1C6",
			},
			fontFamily: {
				oliver: ["var(--font-oliver)"],
			},
			backgroundImage: {
				hero: "linear-gradient(rgb(254 198 46 / 1), rgb(254 198 46 / 1)), url('../assets/bg.png')",
			},
		},
	},
	plugins: [],
} satisfies Config;
