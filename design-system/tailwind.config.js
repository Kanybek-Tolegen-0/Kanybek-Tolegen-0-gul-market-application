const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./src/**/*.{ts,tsx,js,jsx}', '../../design-system/**/*.{ts,tsx,js,jsx}', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        brand_bold: 'rgba(219, 39, 119, 1)'
      },
      background: {
        brand: 'rgba(236, 72, 153, 1)',
        disabled: 'rgba(236, 72, 153, 1)',
        transparent: 'transparent'
      }
    }
  },
  plugins: []
})
