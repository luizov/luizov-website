const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

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
					DEFAULT: '#f8f8f4'
				},
				gold: {
					1: 'hsl(50, 20.0%, 99.1%)',
					2: 'hsl(47, 52.9%, 96.7%)',
					3: 'hsl(46, 38.2%, 93.7%)',
					4: 'hsl(44, 32.7%, 90.1%)',
					5: 'hsl(43, 29.9%, 85.7%)',
					6: 'hsl(41, 28.3%, 79.8%)',
					7: 'hsl(39, 27.6%, 71.9%)',
					8: 'hsl(36, 27.2%, 61.8%)',
					9: 'hsl(36, 20.0%, 49.5%)',
					10: 'hsl(36, 19.8%, 45.7%)',
					11: 'hsl(36, 20.0%, 39.0%)',
					12: 'hsl(36, 16.0%, 20.0%)',
				},
				goldDark: {
					1: 'hsl(44, 9.0%, 8.3%)',
					2: 'hsl(43, 14.3%, 9.6%)',
					3: 'hsl(42, 15.5%, 13.0%)',
					4: 'hsl(41, 16.4%, 15.6%)',
					5: 'hsl(41, 16.9%, 17.8%)',
					6: 'hsl(40, 17.6%, 20.8%)',
					7: 'hsl(38, 18.5%, 26.4%)',
					8: 'hsl(36, 19.6%, 35.1%)',
					9: 'hsl(36, 20.0%, 49.5%)',
					10: 'hsl(36, 22.3%, 54.5%)',
					11: 'hsl(35, 30.0%, 64.0%)',
					12: 'hsl(49, 52.0%, 93.8%)',
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
				sand: {
					1: 'hsl(50, 20.0%, 99.0%)',
					2: 'hsl(60, 7.7%, 97.5%)',
					3: 'hsl(59, 6.5%, 95.1%)',
					4: 'hsl(58, 6.1%, 92.9%)',
					5: 'hsl(57, 6.0%, 90.7%)',
					6: 'hsl(56, 5.9%, 88.4%)',
					7: 'hsl(55, 5.9%, 85.2%)',
					8: 'hsl(51, 6.0%, 77.1%)',
					9: 'hsl(50, 2.0%, 55.7%)',
					10: 'hsl(55, 1.7%, 51.9%)',
					11: 'hsl(50, 2.0%, 43.1%)',
					12: 'hsl(50, 6.0%, 10.0%)',
				},
				sandDark: {
					1: 'hsl(61, 2.0%, 8.3%)',
					2: 'hsl(60, 3.7%, 10.6%)',
					3: 'hsl(58, 3.7%, 13.1%)',
					4: 'hsl(57, 3.6%, 15.3%)',
					5: 'hsl(56, 3.7%, 17.4%)',
					6: 'hsl(55, 3.7%, 19.9%)',
					7: 'hsl(53, 3.7%, 23.6%)',
					8: 'hsl(50, 3.8%, 30.6%)',
					9: 'hsl(50, 4.0%, 42.7%)',
					10: 'hsl(52, 3.1%, 48.3%)',
					11: 'hsl(50, 4.0%, 61.8%)',
					12: 'hsl(56, 4.0%, 92.8%)',
				},
				yellow: {
					1: 'hsl(60, 54.0%, 98.5%)',
					2: 'hsl(52, 100%, 95.5%)',
					3: 'hsl(55, 100%, 90.9%)',
					4: 'hsl(54, 100%, 86.6%)',
					5: 'hsl(52, 97.9%, 82.0%)',
					6: 'hsl(50, 89.4%, 76.1%)',
					7: 'hsl(47, 80.4%, 68.0%)',
					8: 'hsl(48, 100%, 46.1%)',
					9: 'hsl(53, 92.0%, 50.0%)',
					10: 'hsl(50, 100%, 48.5%)',
					11: 'hsl(42, 100%, 29.0%)',
					12: 'hsl(40, 55.0%, 13.5%)',
				},
				yellowDark: {
					1: 'hsl(45, 100%, 5.5%)',
					2: 'hsl(46, 100%, 6.7%)',
					3: 'hsl(45, 100%, 8.7%)',
					4: 'hsl(45, 100%, 10.4%)',
					5: 'hsl(47, 100%, 12.1%)',
					6: 'hsl(49, 100%, 14.3%)',
					7: 'hsl(49, 90.3%, 18.4%)',
					8: 'hsl(50, 100%, 22.0%)',
					9: 'hsl(53, 92.0%, 50.0%)',
					10: 'hsl(54, 100%, 68.0%)',
					11: 'hsl(48, 100%, 47.0%)',
					12: 'hsl(53, 100%, 91.0%)',
				},
				blackA: {
					1: 'hsla(0, 0%, 0%, 0.012)',
					2: 'hsla(0, 0%, 0%, 0.027)',
					3: 'hsla(0, 0%, 0%, 0.047)',
					4: 'hsla(0, 0%, 0%, 0.071)',
					5: 'hsla(0, 0%, 0%, 0.090)',
					6: 'hsla(0, 0%, 0%, 0.114)',
					7: 'hsla(0, 0%, 0%, 0.141)',
					8: 'hsla(0, 0%, 0%, 0.220)',
					9: 'hsla(0, 0%, 0%, 0.439)',
					10: 'hsla(0, 0%, 0%, 0.478)',
					11: 'hsla(0, 0%, 0%, 0.565)',
					12: 'hsla(0, 0%, 0%, 0.910)',
				},
				whiteA: {
					1: 'hsla(0, 0%, 100%, 0)',
					2: 'hsla(0, 0%, 100%, 0.013)',
					3: 'hsla(0, 0%, 100%, 0.034)',
					4: 'hsla(0, 0%, 100%, 0.056)',
					5: 'hsla(0, 0%, 100%, 0.086)',
					6: 'hsla(0, 0%, 100%, 0.124)',
					7: 'hsla(0, 0%, 100%, 0.176)',
					8: 'hsla(0, 0%, 100%, 0.249)',
					9: 'hsla(0, 0%, 100%, 0.386)',
					10: 'hsla(0, 0%, 100%, 0.446)',
					11: 'hsla(0, 0%, 100%, 0.592)',
					12: 'hsla(0, 0%, 100%, 0.923)',
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
				'inset-sm': 'rgba(16, 24, 40, 0.03) 0px 0.75px 2.2px 0px, rgba(16, 24, 40, 0.055) 0px 3.3px 10px 0px, rgba(16, 24, 40, 0.065) 0px 6px 17.8px 0px, rgba(16, 24, 40, 0.48) 0px 11.3px 33.4px 0px, rgba(255, 255, 255, 0.04) 0px 0px 0px 1px inset',
				'inset': 'inset 0 0 0 1px rgba(255,255,255,0.15),inset 0 1px 0 0 rgba(255,255,255,0.2),inset 0 -1px 0 0 rgba(255,255,255,0.15),0 1px 3px rgba(0,0,0,0.05),0 1px 2px rgba(0,0,0,0.1)',
				'xs': '0px 1px 2px rgba(16, 24, 40, 0.05)',
				'sm': '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
				'DEFAULT': '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
				'md': '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
				'lg': '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
				'xl': '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
				'2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
				'3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
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
				sans: ['Switzer', ...fontFamily.sans],
				headings: ['Switzer', ...fontFamily.sans],
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
							fontWeight: '600',
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
						color: theme('colors.whiteA.11'),
						a: {
							color: theme('colors.blueDark.11'),
							'&:hover': {
								color: theme('colors.blueDark.9')
							},
							code: { color: theme('colors.blueDark.9') }
						},
						blockquote: {
							borderLeftColor: theme('colors.yellowDark.9'),
							color: theme('colors.whiteA.11')
						},
						'h1,h2,h3,h4': {
							color: theme('colors.whiteA.12')
						},
					}
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			)
		},
		function ({ addUtilities }) {
			addUtilities({
				'.highlight-inner': {
					boxShadow: `inset 0px 1px 4px rgba(0, 0, 0, 0.15), inset 0 -0.8px 0 0 rgba(255, 255, 255, 0.2)`
				}
			})
		}
	],
}
