/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#3E3B3B',
        customGreen: '#18A86B',
        customWhite: '#FFFFFF',
        customRed: '#EA5252',
        customBlue: '#3A56ED',
        customYellow: '#FAA527',
      },
    },
  },
  plugins: [],
};
