const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./src/**/*.{ts,tsx,js,jsx}', '../../design-system/**/*.{ts,tsx,js,jsx}', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: 'rgba(246, 246, 250, 1)',
        tip_extra_bold: 'rgba(17, 24, 39, 1)',
        tip: 'rgba(55, 65, 81, 1)',
        tip_bold: 'rgba(75, 85, 99, 1)',
        disabled: 'rgba(209, 213, 219, 1)',
        't-disabled': 'rgba(107, 114, 128, 1)',
        brand: 'rgba(236, 72, 153, 1)',
        brand_bold: 'rgba(219, 39, 119, 1)',
        brand_disabled: 'rgba(236, 72, 153, 0.5)',
        body: 'rgba(249, 250, 251, 1)',
        label: 'rgba(55, 65, 81, 1)',
        transparent: 'transparent',
        'pink-500': '#EC4899',
        'gr-50': '#F9FAFB',
        'gr-100': 'rgba(243, 244, 246, 1)',
        'gr-800': 'rgba(31, 41, 55, 1)',
        'gr-200': 'rgba(229, 231, 235, 1)',
        'Gr-800': 'rgba(39, 40, 44, 1)',
        'Gr-900': 'rgba(31, 31, 32, 1)',
        'gr-300': '#D1D5DB',
        'gr-500': '#6B7280',
        'gr-700': '#374151',
        'gr-900': '#111827',
        'card-gr': 'rgba(241, 244, 248, 1)',
        'pk-100': '#FCE7F3',
        'pk-400': 'rgba(244, 114, 182, 1)',
        'pk-700': '#BE185D',
        'gr-400': 'rgba(156, 163, 175, 1)'
      },
      fontSize: {
        base: ['1rem', '1.25rem'],
        xsm: ['11px', '0.75rem'],
        little: ['13px', '18px']
      },

      boxShadow: {
        pr: '0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        card: '0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        // Additional way to add
        // '3xl': ['0 4px 6px -2px rgba(219, 39, 119, 1)', ' 0 10px 15px -3px rgba(255,0,11,1)'],
      },
      borderColor: {
        disabled: 'rgba(209, 213, 219, 1)'
      },
      borderRadius: {
        base: '20px'
      }
    }
  },
  plugins: []
})
