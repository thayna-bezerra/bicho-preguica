/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx, html, css}"],
  theme: {
    extend: {
      colors: {
        'blue-bp': '#00AFEF',
        'pink-bp': '#FF0066',
        'purple-bp': '#9747FF',
        'yellow-bp': '#F5C000'
      }
    },
  },
  plugins: [],
}

