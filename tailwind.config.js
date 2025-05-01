 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
}