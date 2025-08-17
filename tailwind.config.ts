import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        brand: {
          DEFAULT: 'hsl(26, 100%, 55%)',
          pale: 'hsl(25, 100%, 94%)',
        },
        neutral: {
          veryDark: 'hsl(220, 13%, 13%)',
          darkGrayish: 'hsl(219, 9%, 45%)',
          grayish: 'hsl(220, 14%, 75%)',
          lightGrayish: 'hsl(223, 64%, 98%)',
          white: 'hsl(0, 0%, 100%)',
          black: 'hsl(0, 0%, 0%)',
        },
        overlay: 'rgba(0,0,0,0.75)',
      },
      fontFamily: {
        kumbh: ['"Kumbh Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 30px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};

export default config;
