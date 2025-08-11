/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#8a6a2f', // bold text
                    dark: '#6b4f1d',
                    light: '#bfa054',
                },
                secondary: {
                    DEFAULT: '#bfa054', // normal text, accent
                    light: '#f8ecd7',
                },
                border: {
                    DEFAULT: '#e7d7bc', // for border and outline
                    dark: '#f1e9d9',
                },
                background: {
                    DEFAULT: '#f8f6f2',
                    card: '#fff',
                    cardDark: '#181c24',
                },
                muted: '#e7d7bc',
                warning: '#fbbf24',
                error: '#ef4444',
                success: '#22c55e',
            },
        },
    },
    plugins: [
        ({ addBase }) =>
            addBase({
                root: {
                    '--color-values': '255 0 0',
                    '--color-rgb': 'rgb(255 0 0)',
                },
            }),
    ],
};
