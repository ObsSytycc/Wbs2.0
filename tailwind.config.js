/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: '600px',
				// => @media (min-width: 640px) { ... }
				md: '720px',
				// => @media (min-width: 768px) { ... }
				lg: '960px',
				// => @media (min-width: 1024px) { ... }
				xl: '1140px',
				// => @media (min-width: 1280px) { ... }
				'2xl': '1400px'
				// => @media (min-width: 1536px) { ... }
			},
			colors: {
				gray: {
					100: 'rgb(var(--gray-color1) / 1)',
					200: 'rgb(var(--gray-color2) / 1)',
					300: 'rgb(var(--gray-color3) / 1)',
					500: 'rgb(var(--gray-color4) / 1)'
				},
				primary: 'rgb(var(--primary-color) / 1)',
				accent: 'rgb(var(--accent-color) / 1)',
				'secondary-dark': 'rgb(var(--secondary-dark) / 1)',
				'secondary-light': 'rgb(var(--secondary-light) / 1)'
			},
			boxShadow: {
				'3xl': '2px 2px 8px rgba(0, 0, 0, 0.25)'
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif']
			},
			fontSize: {
				sm: 'var(--h5)',
				base: 'var(--main-text)',
				'base-md': 'var(--emph-text)',
				'base-lg': 'var(--desc-text)',
				lg: 'var(--h4)',
				xl: 'var(--h3)',
				'2xl': 'var(--h2)',
				'3xl': 'var(--h1)'
			},
			lineHeight: {
				llh: 'var(--lf-line-height)',
				slh: 'var(--sf-line-height)'
			}
		}
	},
	plugins: []
};
