const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
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
				cyanDark: {
					1: 'hsl(192, 60.0%, 7.2%)',
					2: 'hsl(192, 71.4%, 8.2%)',
					3: 'hsl(192, 75.9%, 10.8%)',
					4: 'hsl(192, 79.3%, 12.8%)',
					5: 'hsl(192, 82.5%, 14.6%)',
					6: 'hsl(192, 86.6%, 16.9%)',
					7: 'hsl(192, 92.6%, 20.1%)',
					8: 'hsl(192, 100%, 24.5%)',
					9: 'hsl(190, 95.0%, 39.0%)',
					10: 'hsl(188, 100%, 40.0%)',
					11: 'hsl(186, 100%, 42.2%)',
					12: 'hsl(185, 73.0%, 93.2%)',
				},
				blue: {
					100: '#F9FBFE',
					150: '#EAF2FE',
					200: '#D9E8FE',
					250: '#BDD7FF',
					300: '#93BEFF',
					400: '#5A9BFF',
					500: '#0A6BFF',
					600: '#065DD8',
					700: '#044DB0',
					800: '#013C88',
					900: '#002C61'
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
				violet: {
					1: '#FDFCFE',
					2: '#FBFAFF',
					3: '#F5F2FF',
					4: '#EDE9FE',
					5: '#E4DEFC',
					6: '#D7CFF9',
					7: '#C4B8F3',
					8: '#AA99EC',
					9: '#6E56CF',
					10: '#644FC1',
					11: '#5746AF',
					12: '#20134B'
				},
				violetDark: {
					1: '#17151F',
					2: '#1C172B',
					3: '#251E40',
					4: '#2C2250',
					5: '#32275F',
					6: '#392C72',
					7: '#443592',
					8: '#5842C3',
					9: '#6E56CF',
					10: '#7C66DC',
					11: '#9E8CFC',
					12: '#F1EEFE'
				},
				mauve: {
					1: '#FDFCFD',
					2: '#F9F8F9',
					3: '#F4F2F4',
					4: '#EEEDEF',
					5: '#E9E8EA',
					6: '#E4E2E4',
					7: '#DCDBDD',
					8: '#C8C7CB',
					9: '#908E96',
					10: '#86848D',
					11: '#6F6E77',
					12: '#1A1523'
				},
				mauveDark: {
					0: '#0F0F10',
					1: '#161618',
					2: '#1C1C1F',
					3: '#232326',
					4: '#28282C',
					5: '#2E2E32',
					6: '#34343A',
					7: '#3E3E44',
					8: '#504F57',
					9: '#706F78',
					10: '#7E7D86',
					11: '#A09FA6',
					12: '#EDEDEF'
				}
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
				'primary-sm': 'inset 0 -1px 2px 0 rgba(1,60,136,.45),0 2px 4px 0 rgba(0,44,97,.1)',
				'primary': 'inset 0 -1px 2px 0 rgba(1,60,136,.45),0 3px 6px 0 rgba(0,44,97,.12)',
				'primary-lg': '0px 3px 6px rgba(0, 44, 97, 0.12), 0px 2px 10px rgba(1, 60, 136, 0.12), 0px 0px 2px rgba(1, 60, 136, 0.22), inset 0px -1px 3px rgba(1, 60, 136, 0.64)',
				'primary-xl': '0px 0px 3px rgba(1, 60, 136, 0.12), 0px 4px 6px rgba(1, 60, 136, 0.14), 0px 4px 20px rgba(1, 60, 136, 0.18), inset 0px -1px 3px rgba(1, 60, 136, 0.64)',
				'primary-2xl': '0px 0px 3px rgba(1, 60, 136, 0.12), 0px 0px 4px rgba(1, 60, 136, 0.12), 0px 8px 40px rgba(1, 60, 136, 0.22), inset 0px -1px 3px rgba(1, 60, 136, 0.64)',
				'inset': 'inset 0 0 0 1px rgba(255,255,255,0.05),inset 0 1px 0 0 rgba(255,255,255,0.2),inset 0 -1px 0 0 rgba(255,255,255,0.1),0 1px 3px rgba(0,0,0,0.05),0 1px 2px rgba(0,0,0,0.1)',
				'xs': '0px 1px 0px rgba(12, 15, 18, 0.06)',
				'sm': '0px 1px 2px rgba(12, 15, 18, 0.06)',
				'DEFAULT': '0px 2px 1px rgba(12, 15, 18, 0.06), 0px 0px 1px rgba(12, 15, 18, 0.25)',
				'md': '0px 0px 2px -1px rgba(12, 15, 18, 0.2), 0px 2px 10px -1px rgba(12, 15, 18, 0.1), 0px 0px 1px -1px rgba(12, 15, 18, 0.25)',
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
				sans: ['Inter', ...fontFamily.sans],
				headings: ['Epilogue', ...fontFamily.sans],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.mauve.11'),
						a: {
							color: theme('colors.blue.500'),
							'&:hover': {
								color: theme('colors.blue.700')
							},
							code: { color: theme('colors.blue.500') }
						},
						h1: {
							color: theme('colors.slate.12'),
							lineHeight: '1.23',
							letterSpacing: '-.52px'
						},
						h2: {
							color: theme('colors.slate.12'),
							lineHeight: '1.3',
							letterSpacing: '-.4px'
						},
						h3: {
							color: theme('colors.slate.12'),
							lineHeight: '1.38',
							letterSpacing: '-.32px'
						},
						h4: {
							color: theme('colors.slate.12'),
							lineHeight: '1.42',
							letterSpacing: '-.12px'
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
							color: theme('colors.blueDark.9'),
							'&:hover': {
								color: theme('colors.blueDark.12')
							},
							code: { color: theme('colors.blueDark.11') }
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
