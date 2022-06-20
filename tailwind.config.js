module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#d0cdd0",
        "dark-lighten": "#e4e1e4",
        primary: "var(--primary-color)",
      },
    },
    keyframes: {
      "fade-in": {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
    animation: {
      "fade-in": "fade-in 0.3s forwards",
    },
  },
  plugins: [],
};
