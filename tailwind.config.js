module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        run: "run 1s linear",
      },
      keyframes: {
        run: {
          "0%": { right: "90%" },
          "50%": { right: "50%" },
          "100%": { right: "20%" },
        },
      },
    },
  },
  plugins: [],
};
