import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        gradient: "url('/D02.png')",
      },
      keyframes: {
        warp: {
          '0%': {
            borderRadius: '100%',
          },
          '20%': { borderRadius: '37% 63 % 51 % 49 % / 37% 35% 35% 63%;' },
          '40%': { borderRadius: '36% 64 % 64 % 36 % / 64% 48% 52% 26%;' },
          '60%': { borderRadius: '37% 63% 51% 49% / 30% 30% 70% 73%;' },
          '80%': { borderRadius: '40% 60% 42% 58% / 51% 51% 49% 59%;' },
          '100%': { borderRadius: '33% 67 % 70 % 30 % / 30% 40% 70% 70%;' },
        },
        'rotate-warp': {
          from: {
            transform: 'rotate(0deg) skew(0deg)',
            borderRadius: '37% 63 % 51 % 49 % / 37% 35% 35% 63%;',
          },
          to: {
            transform: 'rotate(360deg) skew(60deg)',
            borderRadius: '33% 67 % 70 % 30 % / 30% 40% 70% 70%;',
          },
        },
      },
      animation: {
        warp: 'warp 4s ease-in-out infinite both alternate',
        'rotate-warp': 'rotate-warp 70s infinite both alternate',
      },
    },
  },
  plugins: [],
};
export default config;
