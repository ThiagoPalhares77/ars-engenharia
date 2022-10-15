/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        smm: { max: '639px' }
      },
      backgroundImage: {
        'hero-pattern': "url('/public/hero-pattern.png')"
      }
    }
  },
  plugins: []
}
