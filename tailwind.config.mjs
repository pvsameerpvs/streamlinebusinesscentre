/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./lib/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        border: "#e0d2c3",
        input: "#e0d2c3",
        ring: "#c18b4b",
        background: "#fff8ef",
        foreground: "#1e1b18",
        primary: {
          DEFAULT: "#c18b4b",
          foreground: "#fff8ef"
        },
        secondary: {
          DEFAULT: "#262220",
          foreground: "#fff8ef"
        },
        muted: {
          DEFAULT: "#f3e3d2",
          foreground: "#5b4a3a"
        },
        accent: {
          DEFAULT: "#2d2723",
          foreground: "#fff8ef"
        },
        card: {
          DEFAULT: "#fffaf3",
          foreground: "#1e1b18"
        }
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem"
      },
      boxShadow: {
        soft: "0 18px 40px rgba(0,0,0,0.08)"
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
