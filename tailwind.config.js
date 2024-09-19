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
    fontSize: {
      "size--4": ["var(--step--4)", "1.34"],
      "size--3": ["var(--step--3)", "1.34"],
      "size--2": ["var(--step--2)", "1.34"],
      "size--1": ["var(--step--1)", "1.34"],
      "size-0": ["var(--step-0)", "1.34"],
      "size-1": ["var(--step-1)", "1.34"],
      "size-2": ["var(--step-2)", "1.34"],
      "size-4": ["var(--step-4)", "1.14"],
      "size-display": ["clamp(50px, 7vw, 80px)", "0.98"],
      "size-lg/display": ["clamp(80px, 12vw, 98px)", "0.98"],
      "size-xl/display": ["clamp(90px, 9vw, 125px)", "0.98"],
      "size-donate": ["clamp(56px, 3.89vw, 72px)", "0.98"],
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