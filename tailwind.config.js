module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        run: "run 1s linear",
        messageExpand: "messageExpand 0.3s linear",
      },
      keyframes: {
        run: {
          "0%": { right: "90%" },
          "50%": { right: "50%" },
          "100%": { right: "10%" },
        },
        messageExpand: {
          "0%": { width:["155px"], height:["43px"] },
          // "50%": { right: "50%" },
          "100%": { width:["400px"], height:["500px"] },
        },
      },
    },
  },
  plugins: [],
};
