/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6B35',
          pink: '#FF3D7F',
          violet: '#7B2FFF',
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF6B35 0%, #FF3D7F 50%, #7B2FFF 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #e55a28 0%, #e6326f 50%, #6a24e0 100%)',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"],
    darkMode: false,
  },
}
