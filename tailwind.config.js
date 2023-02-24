module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                neon: '#ea580c',
                text: '#f8fafc',
                textDark: '#f8fafc',
                bgblue: '#18181b',
                darkerBlue: '#171717',
            },
            fontFamily: {
                sora: ['Sora', 'sans-serif'],
                fira: ['Fira Code', 'monospace'],
                satoshi: ['Satoshi', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
