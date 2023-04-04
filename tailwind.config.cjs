/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./static/signal.svg')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night","acid","synthwave"]
    },
}

