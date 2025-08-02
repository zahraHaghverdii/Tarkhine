/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  images: {
    formats: ["image/webp", "image/png", "image/jpeg"],
  },
  darkMode: "class", // حالت تاریک را فعال می‌کند
  theme: {
    extend: {
      colors: {
        shade: {
          7: "var(--Shade-7)",
          6: "var(--Shade-6)",
          5: "var(--Shade-5)",
          4: "var(--Shade-4)",
          3: "var(--Shade-3)",
          2: "var(--Shade-2)",
          1: "var(--Shade-1)",
        },
        primary: "var(--Primary)",
        tint: {
          7: "var(--Tint-7)",
          6: "var(--Tint-6)",
          5: "var(--Tint-5)",
          4: "var(--Tint-4)",
          3: "var(--Tint-3)",
          2: "var(--Tint-2)",
          1: "var(--Tint-1)",
        },
        black: "var(--Black)",
        gray: {
          9: "var(--Gray-9)",
          8: "var(--Gray-8)",
          7: "var(--Gray-7)",
          6: "var(--Gray-6)",
          5: "var(--Gray-5)",
          4: "var(--Gray-4)",
          3: "var(--Gray-3)",
          2: "var(--Gray-2)",
          1: "var(--Gray-1)",
        },
        warning: {
          light: "var(--warning-light)",
          DEFAULT: "var(--warning)",
          extralight: "var(--warning-extralight)",
        },
        success: {
          extralight: "var(--success-extralight)",
          light: "var(--success-light)",
          DEFAULT: "var(--success)",
        },
        error: {
          extralight: "var(--Error-extralight)",
          light: "var(--Error-light)",
          DEFAULT: "var(--Error)",
        },
      },
    },
  },
  plugins: [`require("@tailwindcss/line-clamp")`],
};
