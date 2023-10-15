/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    screens: {
      xs: "300px",  //360px
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      'body': ['Manrope']
    },
    colors: {
      primary: "#32D583",

      white: "#fff",

      BLACK: {
        _100: "#000",
        _200: "#101828"
      }
    },
    
  },
  plugins: [],
}

