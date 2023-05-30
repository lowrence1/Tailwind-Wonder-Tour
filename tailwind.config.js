/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      dark: '#23272A',
      light: '#ffffff',
      primary: '#01B3A7',
      grey: '#F6F6F6',
      hover:' hsl(235,86.1%,71.8%)',
      hoverb:'(#313338)'},
  },
  plugins: [],
}

}