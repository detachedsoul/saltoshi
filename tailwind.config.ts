import type { Config } from "tailwindcss";

export default {
	content: [
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
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
		},
	},
	plugins: [],
} satisfies Config;
