/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', // Add the paths to your HTML and JS files here
    './public/index.html', // Add this if you have an HTML file in the public directory
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#dbf4ff',
          200: '#9be5ff',
          300: '#57d2ff',
          400: '#1fbaff',
          500: '#0097e6',
          600: '#007bb3',
          700: '#005e80',
          800: '#004152',
          900: '#00222b',
        },
      },
    },
  },
  plugins: [],
}
