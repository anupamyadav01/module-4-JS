/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      width: {
        promptbox: "200px"
      },
      height: {
        promptheight: "11.5rem"
      },
      colors: {
        mycolors: {
          mainBg: "#131314",
          darkFont: "#e3e3e3",
          promptbg: "#333537",
          lightFont: "#e3e3e3",
          inputBoxBg: "#1e1f20",
          prompthover: "#333537"
        }
      }
    },
  },
  plugins: [],
}

