/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        orange: {
          fade: '#eb8c04',
          strong: '#f2940c',
          light: '#f7d4a3',
          mild: '#eb8c0a',
        },
        text: {
          normal: '#696666',
          orange: '#eb8c0a',
        },
      },
    },
    // dropShadow: {
    //   '3xl': '35px 35px 35px rgba(247,212,163)',
    // },
  },
  plugins: [],
};
