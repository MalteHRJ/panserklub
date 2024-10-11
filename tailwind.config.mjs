/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary:"#fffbf0",
				secondary: '#0c0c0e',
				accent:"#e59a0f",

			},
			fontFamily: {
				bahnschrift: ['bahnschrift', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
