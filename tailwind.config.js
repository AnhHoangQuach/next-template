/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    colors: {
      primary: {
        light: 'var(--color-primary-light)',
        main: 'var(--color-primary-main)',
        dark: 'var(--color-primary-dark)',
      },
      secondary: {
        light: 'var(--color-secondary-light)',
        main: 'var(--color-secondary-main)',
        dark: 'var(--color-secondary-dark)',
      },
      neutral: {
        main: 'var(--color-neutral-main)',
        dialog: 'var(--color-neutral-dialog)',
        text: 'var(--color-neutral-text)',
      },
      black: '#000000',
      white: '#ffffff',
    },
    extend: {
      boxShadow: {
        base: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      },
    },
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
  },
  plugins: [],
};
