/*@type {import('tailwindcss').Config} */
/* module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
 */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001f",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
