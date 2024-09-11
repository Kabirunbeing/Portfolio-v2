// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         wave: 'wave 1s ease-in-out infinite'
//       },
//       keyframes: {
//         wave: {
//           '0%': { transform: 'scale(1)', opacity: '0' },
//           '50%': { transform: 'scale(1.1)', opacity: '0.5' },
//           '100%': { transform: 'scale(1)', opacity: '0' }
//         }
//       }
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      colors: {
        cyan: {
          400: '#22d3ee',
          300: '#67e8f9',
        }
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'scale(1)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '0' }
        },
        'hover-expand': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'shutter': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        wave: 'wave 1s ease-in-out infinite',
        'hover-expand': 'hover-expand 0.3s ease-out forwards',
        'shutter': 'shutter 0.2s ease-in-out'
      }
    },
  },
  plugins: [],
}
