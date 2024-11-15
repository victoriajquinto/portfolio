import type { Config } from 'tailwindcss'

const config: Config = {
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
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      },
      colors: {
        peach: "#f6bfa4",
        brown: "#88645F",
      },
      borderWidth: {
        '16': '16px',
        '32': '32px',
      },
    },
  },
  plugins: [],
}
export default config
