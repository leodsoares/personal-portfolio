/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#6366f1',
        'accent-light': '#818cf8',
      },
      fontFamily: {
        sans: ['Consolas', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

