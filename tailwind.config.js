module.exports = {
    content: ["./app/**/*.{html,ejs}"],
    theme: {
        container: {
            center: true,
            padding: "12px"
        },
        fontSize: {
            xs: '12px',
            sm: '14px',
            base: '16px',
            lg: '18px',
            xl: '20px',
            "2xl": '22px',
            "3xl": '24px',
            "4xl": '28px',
            "5xl": '32px',
            "6xl": '48px',
        },
        extend: {
            colors: {
                primary: '#62db54', // 綠色
                secondary: '#09ACF5', // 藍色
                gray: '#C1C1C1',
                dark: '#2D2D2D',
                black: '#202020'
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        function ({addComponents}) {
            addComponents({
                '.container': {
                    maxWidth: '360px',
                    '@screen md': {
                        maxWidth: '720px',
                    },
                    '@screen lg': {
                        maxWidth: '1320px',
                    },
                }
            })
        }
    ],
}
