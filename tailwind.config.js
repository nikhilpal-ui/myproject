
module.exports = {
  darkMode: 'class', // use class strategy so toggling .dark works
  content: [
    "./*.html",
    "./src/**/*.{html,js,css,scss}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#F7F6FF",
          100: "#EEEFFD",
          200: "#D9D4FB",
          300: "#BFB0F7",
          400: "#9E86F2",
          500: "#7B5BF0",
          600: "#6B46E6",
          700: "#5636C2",
          800: "#3F2788",
          900: "#28// tailwind.config.js1A52"
        }
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // DaisyUI theme names - you can replace / extend these
      {
        "my-light": {
          "primary": "#7B5BF0",
          "secondary": "#6B46E6",
          "accent": "#9E86F2",
          "neutral": "#F6F7FB",
          "base-100": "#ffffff",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272"
        }
      },
      {
        "my-dark": {
          "primary": "#7B5BF0",
          "secondary": "#6B46E6",
          "accent": "#9E86F2",
          "neutral": "#0b1220",
          "base-100": "#071023",
          "info": "#90CDF4",
          "success": "#34D399",
          "warning": "#F6C963",
          "error": "#FB7185"
        }
      }
    ],
    darkTheme: "my-dark"
  }
};
