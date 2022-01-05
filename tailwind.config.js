module.exports = {
  content: ["./app/**/*.tsx"],
  purge: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      header: "#332d2f",
    },
    extend: {
      backgroundImage: {
        "home-page":
          "url('https://halalcbd.io/wp-content/uploads/2021/11/Desktop-Banner-1.png')",
      },
    },
  },
  variants: {},
  plugins: [],
};
