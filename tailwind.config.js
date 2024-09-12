/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    screens: {
      md: { raw: "(min-width: 640px)" },
      lg: { raw: "(min-width: 768px)" },
      xl: { raw: "(min-width: 900px)" },
      "base-landscape": {
        raw: "(max-width: 767px) and (orientation: landscape)",
      },
      "lg-tall": { raw: "(min-width: 768px) and (max-aspect-ratio: 2/1)" },
      touch: { raw: "(hover: none)" },
    },
    fontFamily: {
      display: ["Messer", "san-serif"],
      body: ["Suisse Intl", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}