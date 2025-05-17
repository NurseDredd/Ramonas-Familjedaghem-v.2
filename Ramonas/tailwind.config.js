/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Overlay och bakgrundsklasser för galleriet
    'bg-amber-50/30',
    'bg-amber-50/40',
    'bg-white/30',
    'bg-white/50',
    // Knappar och interaktioner
    'group-hover:bg-white/50',
    'group-focus:ring-4',
    'group-focus:ring-white',
    'group-focus:outline-none',
    // Bildfilter
    'contrast-90',
    'contrast-85',
    'brightness-95',
    // Indikatorprickar
    'bg-amber-600',
    'bg-white',
    'opacity-70',
    'hover:bg-amber-300',
    'scale-125',
  ],
  theme: {
    extend: {
      fontWeight: {
        350: "350",
      }
    },
      willChange: {
        transform: "transform",
      },
  },
  plugins: [],
} 