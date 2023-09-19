/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroBg: "url('../app/assets/heroBg.webp')",
        jp1: "url('../app/assets/properties/jaipur/1-min.jpg')",
        jp2: "url('../app/assets/properties/jaipur/2-min.jpg')",
        jp3: "url('../app/assets/properties/jaipur/3-min.jpg')",
        jp4: "url('../app/assets/properties/jaipur/4-min.jpg')",
        jp5: "url('../app/assets/properties/jaipur/5-min.jpg')",
        jp6: "url('../app/assets/properties/jaipur/6-min.jpg')",
        jp7: "url('../app/assets/properties/jaipur/7-min.jpg')",
        user: "url('../app/assets/userDp.webp')",
      },
      boxShadow: {
        upward:
          "0 -1px 4px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
