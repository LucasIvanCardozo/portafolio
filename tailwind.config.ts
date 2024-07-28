import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '8/5': '8 / 5',
        '16/9': '16 / 9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '110': '27.5rem',
        '128': '32rem',
        '1/6': '16.6%',
        '1/8': '12.5%',
        '1/10': '10%',
        '1/12': '8.33%',
        '1/14': '7.14%',
        '7/20': '35%',
        '2/5': '40%',
        '7/10': '70%',
        '51/60': '85%',
        '3/2': '150%',
        '2/1': '200%',
        '5/2': '250%',
        '11/4': '275%',
        '3/1': '300%',
      },
    },
  },
  plugins: [],
};
export default config;
