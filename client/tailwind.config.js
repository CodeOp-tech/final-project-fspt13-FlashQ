/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const MyClass = plugin(function ({ addUtilities }) {
    addUtilities({
        ".my-rotate-y-180": {
            transform: "rotateY(180deg)",
        },
        ".preserve-3d": {
            transformStyle: "preserve-3d",
        },
        ".perspective": {
            perspective: "1000px",
        },
        ".backface-hidden": {
            backfaceVisibility: "hidden",
        },
    });
});

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},

        colors: {
            aquamarine: "#00A08A",
            beige: "#FFE5A9",
            alga: "#d4f4dd",
            orangez: "#FFB100",
            mustard: "#FDCF62",
        },
    },
    plugins: [require("daisyui"), MyClass],
};
