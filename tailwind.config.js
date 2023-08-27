/*eslint no-undef: "error"*/
/*eslint-env browser*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        "2xl": "1440px",
        "3xl": "1600px",
      },
    },
  },
};
