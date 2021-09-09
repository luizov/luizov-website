const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#F8F8F4'
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
        electric: {
          100: '#F8F9FB',
          150: '#E4EAF3',
          200: '#C8D2E1',
          250: '#A4B1C4',
          300: '#8290A5',
          400: '#68778D',
          500: '#56667D',
          600: '#47556A',
          700: '#394558',
          800: '#2B3545',
          900: '#1E2632',
          950: '#131C28',
          980: '#0C0F12'
        },
        spiro: {
          100: '#F9FDFE',
          150: '#F1FBFE',
          200: '#E6F8FD',
          250: '#CDF2FC',
          300: '#A2E9FC',
          400: '#67DEFF',
          500: '#2BD5FF',
          600: '#1DB8DE',
          700: '#0F93B8',
          800: '#016E8F',
          900: '#014B61',
          950: '#003F52'
        },
        orange: colors.orange,
      },
      animation: {
        enter: "enter 200ms ease-out",
        'spin-slow': 'spin 2s linear infinite',
      },
      backgroundImage: {
        'gradient-radial-to-t': 'radial-gradient(50% 100% at 50% 100%, var(--tw-gradient-stops))',
        'gradient-radial-to-b': 'radial-gradient(50% 100% at 50% 0%, var(--tw-gradient-stops))',
        'header-texture': "url('/utility/hero-bg.svg')",
        'home': "url('/utility/home-bg.svg')",
      },
      boxShadow: {
        'primary-sm': 'inset 0 -1px 2px 0 rgba(1,60,136,.45),0 2px 4px 0 rgba(0,44,97,.1)',
        'primary': 'inset 0 -1px 3px 0 rgba(1,60,136,.5),0 3px 6px 0 rgba(0,44,97,.12)',
        'primary-lg': '0px 3px 6px rgba(0, 44, 97, 0.12), 0px 2px 10px rgba(1, 60, 136, 0.12), 0px 0px 2px rgba(1, 60, 136, 0.22), inset 0px -1px 3px rgba(1, 60, 136, 0.64)',
        'primary-xl': '0px 0px 3px rgba(1, 60, 136, 0.12), 0px 4px 6px rgba(1, 60, 136, 0.14), 0px 4px 20px rgba(1, 60, 136, 0.18), inset 0px -1px 3px rgba(1, 60, 136, 0.64)',
        'primary-2xl': '0px 0px 3px rgba(1, 60, 136, 0.12), 0px 0px 4px rgba(1, 60, 136, 0.12), 0px 8px 40px rgba(1, 60, 136, 0.22), inset 0px -1px 3px rgba(1, 60, 136, 0.64)',
        'spiro-sm': '0px 2px 4px rgba(1, 75, 97, 0.1), inset 0px -1px 2px rgba(1, 110, 143, 0.45)',
        'spiro': '0px 3px 6px rgba(1, 75, 97, 0.12), inset 0px -1px 3px rgba(1, 110, 143, 0.5)',
        'spiro-lg': '0px 3px 6px rgba(1, 75, 97, 0.12), 0px 2px 10px rgba(1, 75, 97, 0.12), 0px 0px 2px rgba(1, 75, 97, 0.22), inset 0px -1px 3px rgba(1, 110, 143, 0.64)',
        'spiro-xl': '0px 0px 3px rgba(1, 75, 97, 0.12), 0px 4px 6px rgba(1, 75, 97, 0.14), 0px 4px 20px rgba(1, 75, 97, 0.18), inset 0px -1px 3px rgba(1, 110, 143, 0.64)',
        'spiro-2xl': '0px 0px 3px rgba(1, 75, 97, 0.12), 0px 0px 4px rgba(1, 75, 97, 0.12), 0px 8px 40px rgba(1, 75, 97, 0.22), inset 0px -1px 3px rgba(1, 110, 143, 0.64)',
        'inset': 'inset 0 0 0 1px rgba(255,255,255,0.05),inset 0 1px 0 0 rgba(255,255,255,0.2),inset 0 -1px 0 0 rgba(255,255,255,0.1),0 1px 3px rgba(0,0,0,0.05),0 1px 2px rgba(0,0,0,0.1)',
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
        sans: ['SpaceGrotesk', ...fontFamily.sans],
        headings: ['SpaceGrotesk'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.electric.500'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700')
              },
              code: { color: theme('colors.blue.400') }
            },
            h1: {
              color: theme('colors.electric.800'),
              lineHeight: '1.23',
              letterSpacing: '-.52px'
            },
            h2: {
              color: theme('colors.electric.800'),
              lineHeight: '1.3',
              letterSpacing: '-.4px'
            },
            h3: {
              color: theme('colors.electric.800'),
              lineHeight: '1.38',
              letterSpacing: '-.32px'
            },
            h4: {
              color: theme('colors.electric.800'),
              lineHeight: '1.42',
              letterSpacing: '-.12px'
            },
            strong: {
              color: theme('colors.electric.800'),
            },
            thead: {
              color: theme('colors.electric.900'),
              fontWeight: '500',
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.electric.200'),
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.electric.200'),
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.electric.800'),
              borderRadius: '50%',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.electric.300'),
            a: {
              color: theme('colors.spiro.500'),
              '&:hover': {
                color: theme('colors.spiro.600')
              },
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.electric.700'),
              color: theme('colors.electric.200')
            },
            'h1,h2,h3,h4': {
              color: theme('colors.blue.150')
            },
          }
        },
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      boxShadow: ['active'],
      translate: ['active'],
      transitionProperty: ['hover', 'focus', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}
