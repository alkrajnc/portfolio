/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "nsb-picture": "url('/src/assets/dev_image.jpg')",
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        projects: "100px 1fr",
        blocks: "repeat(3, 200px) 1fr",
      },
      gridTemplateColumns: {
        project: "repeat(4, 1fr)",
      },
    },
  },
  plugins: [],
};
