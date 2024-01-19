/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontSize: {
			heading1: '56px',
			heading2: '40px',
			heading3: '20px',
			headline1: '18px',
			headline2: '16px',
			body1: '16px',
			body2: '14px',
			body3: '13px',
			caption1: '12px',
			caption2: '10px'
		}
	},

	daisyui: {
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		logs: true,
		themes: [
			{
				newFutureMarketTheme: {
					primary: '#0027A0',
					secondary: '#223263',
					accent: '#40BFFF',
					neutral: '#9098B1',
					'base-100': '#ffffff',
					'primary-content': '#ffffff',
					'secondary-content': '#FFFFFF',
					'accent-content': '#FFFFFF',
					'neutral-content': '#576285',
					info: '#40BFFF',
					success: '#53D1B6',
					warning: '#FFC833',
					error: '#FB7181',
					'info-content': '#FFFFFF',
					'success-content': '#FFFFFF',
					'warning-content': '#FFFFFF',
					'error-content': '#FFFFFF'
				}
			}
		]
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
