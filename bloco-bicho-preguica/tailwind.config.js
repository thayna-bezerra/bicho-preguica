/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ["./src/**/*.{html,tsx, ts}"],
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

