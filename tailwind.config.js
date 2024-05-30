/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#334c8a',
          gray: '#a9c3d6',
          light: '#E3F4F7',
        },
        gray: {
          DEFAULT: 'rgba(0,0,0,0.3)',
        },
        white: {
          DEFAULT: '#ffffff',
        },
        black: {
          DEFAULT: '#1c1c1c',
          light: '#1c1c1cbb',
        },
      },
      boxShadow: {
        DEFAULT: '0px 1px 2px 0px rgba(0,0,0,0.1)',
        border: '0px 0px 2px 1px rgba(0,0,0,0.05)',
        spread: '0px 8px 10px 0px rgba(0,0,0,0.05)',
      },
      screens: {
        lg_1: '1190px',
        lg_2: '1280px',
        xs_2: '520px',
        xs: '480px',
        '2xs': '420px',
        '3xs': '360px',
        '4xs': '300px',
      },
    },
  },
  plugins: [],
};
