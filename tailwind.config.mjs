import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enables dark mode with class
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        // You can add additional colors or customization here
      }
    }
  }
}
