/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1180px",
    },
    extend: {
        width: {
            "5/100": "5%",
            "10/100": "10%",
            "15/100": "15%",
            "20/100": "20%",
            "25/100": "25%",
            "30/100": "30%",
            "35/100": "35%",
            "40/100": "40%",
            "45/100": "45%",
            "50/100": "50%",
            "95/100": "95%",
            "23": "23rem",
        },
        colors: {
            primary: "#1173cd",
            secondary: "#024de3",
            white: "#ffffff",
        },
        backgroundColor: {
            primary: "#1173cd",
            secondary: "#024de3",
            dark: "#231f20",
            white: "#ffffff",
            black: "#000000",
            'white-smoke': "#F5F5F5",
        },
        borderColor: {
            primary: "#003c7b",
            secondary: "#0066ab",
            white: "#ffffff",
        },
        fontFamily: {
            Poppins: "Poppins, sans-serif",
            Kantumruy: "Kantumruy Pro Regular, serif",
            fontPoppinKantumruyProRegular: ["Poppins, Kantumruy Pro Regular, serif"],
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            bold: 700,
        },
    },
  },
  plugins: [],
}

