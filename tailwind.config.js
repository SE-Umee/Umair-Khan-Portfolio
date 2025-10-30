/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      colors: {
        navy: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073ff',
          600: '#005acc',
          700: '#004299',
          800: '#0a192f',
          900: '#020c1b',
        },
        teal: {
          50: '#e6fffa',
          100: '#b2f5ea',
          200: '#81e6d9',
          300: '#4fd1c5',
          400: '#38b2ac',
          500: '#64ffda',
          600: '#319795',
          700: '#2c7a7b',
          800: '#285e61',
          900: '#234e52',
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        portfolioTheme: {
          "primary": "#64ffda",           // Teal accent
          "secondary": "#8892b0",         // Light gray/blue
          "accent": "#64ffda",            // Teal
          "neutral": "#233554",           // Navy blue
          "base-100": "#0a192f",          // Dark navy background
          "base-200": "#112240",          // Slightly lighter navy
          "base-300": "#233554",          // Medium navy
          "base-content": "#ccd6f6",      // Light text
          "info": "#64ffda",              
          "success": "#64ffda",           
          "warning": "#ffc107",           
          "error": "#f44336",             
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
