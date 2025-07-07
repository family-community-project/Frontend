/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          green100: "#ECF9F2",
          green200: "#E3F6EB",
          green300: "#C5ECD6",
          green400: "#43C17A",
          green500: "#3CAE6E",
          green600: "#369A62",
          green700: "#32915C",
          green800: "#287449",
          green900: "#1E5737",
        },
        gray: {
          gray100: "#FCFCFC",
          gray200: "#EFEFEF",
          gray300: "#DFDFDF",
          gray400: "#B7B7B7",
          gray500: "#949494",
          gray600: "#777777",
          gray700: "#555555",
          gray800: "#2A2A2A",
          gray900: "#111111",
        },
        system: {
          red: "#FF334B",
        },
        logo: "#26A17B",
        kakao: {
          container: "#FEE500",
        },
      },
    },
  },
  plugins: [],
};
