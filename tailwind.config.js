module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js}"],
  darkMode: false,
  theme: {
    backgroundColor: (theme) => ({
      ...theme("borderColors"),
      primary: "#313337",
      secondary: "#18191b",
      third: "#202124",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      primary: "#313337",
      secondary: "#18191b",
      danger: "#e3342f",
    }),
    extend: {
      gridTemplateColumns: {
        center: "1fr minmax(900px, 1fr) 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    boxShadow: false,
  },
  plugins: [],
};
