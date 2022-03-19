const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				bg: {
					DEFAULT: '#F8F8F2'
				},
				slate: {
					1: 'hsl(206, 30.0%, 98.8%)',
					2: 'hsl(210, 16.7%, 97.6%)',
					3: 'hsl(209, 13.3%, 95.3%)',
					4: 'hsl(209, 12.2%, 93.2%)',
					5: 'hsl(208, 11.7%, 91.1%)',
					6: 'hsl(208, 11.3%, 88.9%)',
					7: 'hsl(207, 11.1%, 85.9%)',
					8: 'hsl(205, 10.7%, 78.0%)',
					9: 'hsl(206, 6.0%, 56.1%)',
					10: 'hsl(206, 5.8%, 52.3%)',
					11: 'hsl(206, 6.0%, 43.5%)',
					12: 'hsl(206, 24.0%, 9.0%)',
				},
				slateDark: {
					1: 'hsl(200, 7.0%, 8.8%)',
					2: 'hsl(195, 7.1%, 11.0%)',
					3: 'hsl(197, 6.8%, 13.6%)',
					4: 'hsl(198, 6.6%, 15.8%)',
					5: 'hsl(199, 6.4%, 17.9%)',
					6: 'hsl(201, 6.2%, 20.5%)',
					7: 'hsl(203, 6.0%, 24.3%)',
					8: 'hsl(207, 5.6%, 31.6%)',
					9: 'hsl(206, 6.0%, 43.9%)',
					10: 'hsl(206, 5.2%, 49.5%)',
					11: 'hsl(206, 6.0%, 63.0%)',
					12: 'hsl(210, 6.0%, 93.0%)',
				},
				blue: {
					1: 'hsl(206, 100%, 99.2%)',
					2: 'hsl(210, 100%, 98.0%)',
					3: 'hsl(209, 100%, 96.5%)',
					4: 'hsl(210, 98.8%, 94.0%)',
					5: 'hsl(210, 95.0%, 90.1%)',
					6: 'hsl(210, 81.2%, 84.5%)',
					7: 'hsl(208, 77.5%, 76.9%)',
					8: 'hsl(208, 81.9%, 65.3%)',
					9: 'hsl(214, 100%, 52.0%)',
					10: 'hsl(214, 100%, 47.3%)',
					11: 'hsl(214, 100%, 43.2%)',
					12: 'hsl(213, 100%, 14.0%)',
				},
				blueDark: {
					1: 'hsl(212, 35.0%, 9.2%)',
					2: 'hsl(216, 50.0%, 11.8%)',
					3: 'hsl(214, 59.4%, 15.3%)',
					4: 'hsl(214, 65.8%, 17.9%)',
					5: 'hsl(213, 71.2%, 20.2%)',
					6: 'hsl(212, 77.4%, 23.1%)',
					7: 'hsl(211, 85.1%, 27.4%)',
					8: 'hsl(211, 89.7%, 34.1%)',
					9: 'hsl(206, 100%, 50.0%)',
					10: 'hsl(209, 100%, 60.6%)',
					11: 'hsl(210, 100%, 66.1%)',
					12: 'hsl(206, 98.0%, 95.8%)',
				},
				sky: {
					1: 'hsl(193, 100%, 98.8%)',
					2: 'hsl(193, 100%, 97.3%)',
					3: 'hsl(193, 99.0%, 94.7%)',
					4: 'hsl(193, 91.4%, 91.4%)',
					5: 'hsl(194, 82.0%, 86.6%)',
					6: 'hsl(194, 74.1%, 79.5%)',
					7: 'hsl(194, 72.3%, 69.6%)',
					8: 'hsl(193, 77.9%, 53.9%)',
					9: 'hsl(193, 98.0%, 70.0%)',
					10: 'hsl(193, 87.0%, 66.5%)',
					11: 'hsl(195, 100%, 31.5%)',
					12: 'hsl(195, 100%, 13.0%)',
				},
				skyDark: {
					1: 'hsl(205, 45.0%, 8.6%)',
					2: 'hsl(202, 71.4%, 9.6%)',
					3: 'hsl(201, 74.6%, 12.2%)',
					4: 'hsl(201, 77.4%, 14.4%)',
					5: 'hsl(200, 80.3%, 16.5%)',
					6: 'hsl(200, 84.1%, 18.9%)',
					7: 'hsl(199, 90.2%, 22.1%)',
					8: 'hsl(198, 100%, 26.1%)',
					9: 'hsl(193, 98.0%, 70.0%)',
					10: 'hsl(192, 100%, 77.0%)',
					11: 'hsl(192, 85.0%, 55.8%)',
					12: 'hsl(198, 98.0%, 95.8%)',
				},
			},
			animation: {
				enter: "enter 200ms ease-out",
				'spin-slow': 'spin 2s linear infinite',
			},
			backgroundImage: {
				'gradient-radial-to-t': 'radial-gradient(50% 100% at 50% 100%, var(--tw-gradient-stops))',
				'gradient-radial-to-b': 'radial-gradient(50% 100% at 50% 0%, var(--tw-gradient-stops))',
				'header-texture': "url('/utility/hero-bg.svg')",
				'hero': "url('/utility/hero-bg.jpg')",
				'home': "url('/utility/home-bg.svg')",
			},
			boxShadow: {
				'primary-lg': '0px 3px 6px rgba(0, 44, 97, 0.12), 0px 2px 10px rgba(1, 60, 136, 0.12), 0px 0px 2px rgba(1, 60, 136, 0.22), inset 0px -1px 3px rgba(1, 60, 136, 0.64)',
				'inset': 'inset 0 0 0 1px rgba(255,255,255,0.05),inset 0 1px 0 0 rgba(255,255,255,0.3),inset 0 -1px 0 0 rgba(255,255,255,0.1),0 1px 3px rgba(0,0,0,0.05),0 1px 2px rgba(0,0,0,0.1)',
				'xs': '0px 1px 0px rgba(12, 15, 18, 0.06)',
				'sm': '0px 1px 2px rgba(12, 15, 18, 0.06)',
				'DEFAULT': '0px 2px 1px rgba(12, 15, 18, 0.06), 0px 0px 1px rgba(12, 15, 18, 0.25)',
				'md': '0px 4px 6px -1px rgba(12, 15, 18, 0.2), 0px 2px 4px -2px rgba(12, 15, 18, 0.1), 0px 0px 1px -1px rgba(12, 15, 18, 0.25)',
				'lg': '0px 10px 15px -2px rgba(12, 15, 18, 0.1), 0px 4px 6px -1px rgba(12, 15, 18, 0.06), 0px 0px 1px -1px rgba(12, 15, 18, 0.25)',
				'xl': '0px 20px 25px -5px rgba(12, 15, 18, 0.1), 0px 4px 10px -5px rgba(12, 15, 18, 0.04), 0px 0px 4px -2px rgba(12, 15, 18, 0.1)',
				'2xl': '0px 25px 50px -12px rgba(12, 15, 18, 0.25), 0px 0px 4px -2px rgba(12, 15, 18, 0.1)',
				'3xl': '0px 0px 4px -2px rgba(0, 0, 0, 0.1), 0px 35px 60px -16px rgba(12, 15, 18, 0.26)',
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					md: '3rem',
					lg: '4rem',
					xl: '6rem',
					'2xl': '8rem',
				},
				center: true,
			},
			fontFamily: {
				sans: ['Barlow', ...fontFamily.sans],
				headings: ['Barlow', ...fontFamily.sans],
				mono: ['JetBrains Mono', ...fontFamily.mono]
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.slate.11'),
						a: {
							color: theme('colors.blue.9'),
							'&:hover': {
								color: theme('colors.blue.11')
							},
							code: { color: theme('colors.blue.9') }
						},
						'h1,h2,h3,h4,h5': {
							color: theme('colors.slate.12'),
						},
						strong: {
							color: theme('colors.slate.12'),
						},
						thead: {
							color: theme('colors.slate.12'),
							fontWeight: '500',
							borderBottomWidth: '1px',
							borderBottomColor: theme('colors.slate.6'),
						},
						'tbody tr': {
							borderBottomWidth: '1px',
							borderBottomColor: theme('colors.slate.6'),
						},
						'ul > li::before': {
							content: '""',
							position: 'absolute',
							backgroundColor: theme('colors.slate.12'),
							borderRadius: '50%',
						},
					},
				},
				dark: {
					css: {
						color: theme('colors.slateDark.11'),
						a: {
							color: theme('colors.blueDark.11'),
							'&:hover': {
								color: theme('colors.blueDark.9')
							},
							code: { color: theme('colors.blueDark.9') }
						},
						blockquote: {
							borderLeftColor: theme('colors.slateDark.6'),
							color: theme('colors.slateDark.11')
						},
						'h1,h2,h3,h4': {
							color: theme('colors.slateDark.12')
						},
					}
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	],
}
