/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
		extend: {
			colors: {
				'verdemfw': 'rgba(27, 140, 153, 0.996)',
				'grismfw': 'rgba(63, 63, 65, 0.996)',
      		},
		},
	},
	plugins: [],
}
