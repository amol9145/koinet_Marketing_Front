/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Make sure your paths are correct for all files
    ],
    theme: {
      extend: {
        animation: {
          gradient: "gradient-bg 6s ease infinite", // Define the animation
        },
        keyframes: {
          "gradient-bg": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        },
        backgroundSize: {
          "200%": "200% 200%", // Ensure smooth gradient transitions
        },
      },
    },
    plugins: [],
  };
  

