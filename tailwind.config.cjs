/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://res.cloudinary.com/da5oy1ybv/image/upload/v1682006443/signal_roxwy1.svg')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night","acid","synthwave"]
    },
}

