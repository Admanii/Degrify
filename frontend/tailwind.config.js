/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto", // 👈 for sidebar layout. adds grid-cols-sidebar class
      }, 
      gridTemplateRows: {
        header: "64px auto", // 👈 for the navbar layout. adds grid-rows-header class
      },
      spacing: {
        '135': '36rem',
        '130': '33rem',
        '128': '32rem',
        '110': '30rem'
      },
      fontFamily: {
        certificate: ['CertificateFont', 'sans-serif'],
        sans: ['"Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
