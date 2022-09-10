/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Fira Code"],
        poppins: ["Poppins"],
      },
      colors: {
        main: "#ffb703",
        text: "#ccd6d6",
      },
    },
  },
  plugins: [],
};
