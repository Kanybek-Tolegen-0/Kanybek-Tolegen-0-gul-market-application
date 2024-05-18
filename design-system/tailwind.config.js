const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./src/**/*.{ts,tsx,js,jsx}', '../../design-system/**/*.{ts,tsx,js,jsx}', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: 'rgba(246, 246, 250, 1)',
        tip: 'rgba(75, 85, 99, 1)',
        brand: 'rgba(236, 72, 153, 1)',
        brand_bold: 'rgba(219, 39, 119, 1)',
        layout: 'rgba(249, 250, 251, 1)',
        transparent: 'transparent'
      },
      fontSize: {
        base: ['1rem', '1.25rem']
      },

      boxShadow: {
        pr: '0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        // Additional way to add
        // '3xl': ['0 4px 6px -2px rgba(219, 39, 119, 1)', ' 0 10px 15px -3px rgba(255,0,11,1)'],
      }
    }
  },
  plugins: []
})
