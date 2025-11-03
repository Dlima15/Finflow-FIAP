/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        fundo: "#0A0F1E",
        primario: "#00FF88",
        secundario: "#00BFFF",
        roxo: "#7F00FF",
      },
      boxShadow: {
        neon: "0 0 20px rgba(0,255,136,0.3)",
      },
    },
  },
  plugins: [],
};
