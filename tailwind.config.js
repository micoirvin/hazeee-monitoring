/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#334c8a',
          gray: '#a9c3d6',
        },
        gray: {
          DEFAULT: '#f5f5f5',
        },
        white: {
          DEFAULT: '#ffffff',
        },
      },
      screen: {
        lg_2: '1180px',
      },
    },
  },
  plugins: [],
};
