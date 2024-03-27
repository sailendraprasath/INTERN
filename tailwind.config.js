/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sailesh: ["Protest Revolution", "sans-serif"],
        ProtestRiot: ["Protest Riot", "sans-serif"],
        playfairDisplay: ["Playfair Display", "serif"],
        leckerli: ["Leckerli One", "cursive"],
        pacifico: ["Pacifico", "cursive"],
        youngSerif: ["Young Serif", "serif"],
        inter: ["Inter"],
      },
      colors: {
        myfont1: "#DDA15E",
        myfont2: "#FEFAE0",
        myfont3: "#1A150E",
        myMenu: "#E4E6E3",
        mytext1: "#5C5346",
        mytext2: "#FFFFFF",
      },
    },
  },

  plugins: [],
};
