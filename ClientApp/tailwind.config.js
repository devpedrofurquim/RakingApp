/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                openSans: ["Opens Sans", "sans"]
            },
        },
    },
    plugins: [],
}