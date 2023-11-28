/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors:{
				'orange':'#EC6B2F',
				'blue':'#2C5282'
			}
		}
	},
	variants: {},
	plugins: []
}