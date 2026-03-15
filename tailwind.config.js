/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        site: {
          bg: '#F2F2F2',
        },
        indigoDye: {
          primary: '#033A5B',
          secondary: '#0C4D75',
          tertiary: '#084461',
        },
        pictonBlue: {
          50: '#EEF9FE',
          100: '#D7F0FB',
          primary: '#22B0EB',
          secondary: '#28A2D4',
        },
        lapisLazuli: '#126190',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
