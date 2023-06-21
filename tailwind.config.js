/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {
      width: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}

export default config
