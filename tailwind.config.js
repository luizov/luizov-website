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
        sans: ['Manrope', ...fontFamily.sans],
        headings: ['Manrope'],
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
              code: { color: theme('colors.violet.11') }
            },
            h1: {
              color: theme('colors.mauve.12'),
              lineHeight: '1.23',
              letterSpacing: '-.52px'
            },
            h2: {
              color: theme('colors.mauve.12'),
              lineHeight: '1.3',
              letterSpacing: '-.4px'
            },
            h3: {
              color: theme('colors.mauve.12'),
              lineHeight: '1.38',
              letterSpacing: '-.32px'
            },
            h4: {
              color: theme('colors.mauve.12'),
              lineHeight: '1.42',
              letterSpacing: '-.12px'
            },
            strong: {
              color: theme('colors.mauve.12'),
            },
            thead: {
              color: theme('colors.mauve.12'),
              fontWeight: '500',
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.mauve.6'),
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.mauve.6'),
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.mauve.12'),
              borderRadius: '50%',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.mauveDark.11'),
            a: {
              color: theme('colors.violetDark.11'),
              '&:hover': {
                color: theme('colors.violetDark.12')
              },
              code: { color: theme('colors.violetDark.11') }
            },
            blockquote: {
              borderLeftColor: theme('colors.mauveDark.6'),
              color: theme('colors.mauveDark.11')
            },
            'h1,h2,h3,h4': {
              color: theme('colors.mauveDark.12')
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
