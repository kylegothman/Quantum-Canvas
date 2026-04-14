/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        qc: {
          bg: '#0a0a0f',
          surface: '#141420',
          elevated: '#1e1e30',
          border: '#2a2a40',
          'text-primary': '#e8e8f0',
          'text-secondary': '#8888a0',
          'accent-orange': '#ff6b35',
          'accent-pink': '#ff2e63',
          'accent-cyan': '#08d9d6',
          'accent-purple': '#6b5ce7',
          'accent-green': '#38b764',
          'phase-0': '#1a0533',
          'phase-1': '#6b1d5e',
          'phase-2': '#c94277',
          'phase-3': '#f28a2e',
          'phase-4': '#fde74c',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
