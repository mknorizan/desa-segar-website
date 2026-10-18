/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandGreen: '#8CC51F',
        brandBlue: '#35A8DC',
        leafGreen: '#087A47',
        softMint: '#F4FAF7',
        charcoal: '#263B35',
      },
      boxShadow: {
        soft: '0 8px 22px rgba(17, 38, 30, 0.08)',
      },
    },
  },
  plugins: [],
}

