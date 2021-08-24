const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
          950: '#131C28'
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
          900: '#014B61'
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
        'btn-primary': 'inset 0 -1px 3px 0 rgba(1,60,136,.5),0 3px 6px 0 rgba(0,44,97,.1)',
        'btn-secondary': 'inset 0 -1px 3px 0 rgba(30,38,50,.2),0 3px 6px 0 rgba(30,38,50,.2)',
        'card': '0 24px 66px 0 rgba(10,107,255,.02),0 16px 40px 0 rgba(10,107,255,.03),0 2px 8px 0 rgba(10,107,255,.1),0 1px 2px 0 rgba(10,107,255,.07)',
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
            color: theme('colors.electric.400'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700')
              },
              code: { color: theme('colors.blue.400') }
            },
            h1: {
              color: theme('colors.gray.200'),
              lineHeight: '1.23',
              letterSpacing: '-.52px'
            },
            h2: {
              color: theme('colors.electric.900'),
              lineHeight: '1.3',
              letterSpacing: '-.4px'
            },
            h3: {
              color: theme('colors.electric.900'),
              lineHeight: '1.38',
              letterSpacing: '-.32px'
            },
            h4: {
              color: theme('colors.electric.900'),
              lineHeight: '1.42',
              letterSpacing: '-.12px'
            },
            strong: {
              color: theme('colors.electric.900'),
            },
            pre: {
              color: null,
              backgroundColor: null,
              overflowX: 'auto',
              fontSize: theme('fontSize.base'),
              padding: 0,
            },
            'pre pre': {
              padding: theme('spacing.4'),
              margin: 0,
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              fontWeight: '400',
              color: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            code: {
              color: theme('colors.electric.900'),
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
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
      }),
    },
  },
  variants: {
    extend: {
      translate: ['active'],
      boxShadow: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}
