module.exports = {
  content: [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'color-primary-darkest': '#0f172a ', //blue-gray-900
        'color-primary-darker': '#1e293b ', //blue-gray-800
        'color-primary-dark': '#334155', //blue-gray-700
        'color-primary': '#78909c', //blue-gray-400
        'color-primary-light': '#cbd5e1 ', //blue-gray-300
        'color-primary-lighter': '#e2e8f0', //blue-gray-200
        'color-bg': '#f1f5f9', //blue-gray-200
        'teal-darkest': '#134e4a ', //teal-900
        'teal-darker': '#0f766e ', //teal-700
        'teal-dark': '#0d9488', //teal-600
        'teal': '#14b8a6', //teal-500
        'teal-lightest': '#ccfbf1', //teal-100
        'color-alert-light': '#fda4af', //pink-300
        'color-alert-lightest': '#fbe9e7', //pink-100
        'color-redalert-light': '#FEE2E2', //red-100
      },
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      screens: {
        'xs': '350px',
        // => @media (min-width: 420px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}
