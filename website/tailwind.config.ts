import { type Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  } satisfies Config,
}