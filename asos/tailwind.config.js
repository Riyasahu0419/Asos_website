/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'custom-gray': 'rgb(45, 45, 45)',
      'custom-gray-light':'rgb(82,80,80)',
      'custom-yellow':'rgb(204,255,0)',
      'custom-bgreen': '#C7FD16',
      'custom-green': '#9DF1DE'
      
      
    },},
  },
  variants: {},
  plugins: [],
}
