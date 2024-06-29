const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./src/**/*.{ts,tsx,js,jsx}', '../../design-system/**/*.{ts,tsx,js,jsx}', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#F6F6FA',
        tip_bold: '#4B5563',
        brand: '#EC4899',
        brand_bold: '#DB2777',
        brand_disabled: 'rgba(236, 72, 153, 0.5)',
        transparent: 'transparent',
        'card-gr': '#F1F4F8',
        'pink-500': '#EC4899',
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
        'gray-400': '#9CA3AF',
        'gray-500': '#6B7280',
        'gray-700': '#374151',
        'gray-800': '#1F2937',
        'gray-900': '#111827',
        'pk-400': '#F472B6',
        'blue-50': '#EFF6FF'
      },
      fontSize: {
        base: ['1rem', '1.25rem'],
        xsm: ['11px', '0.75rem'],
        little: ['13px', '18px']
      },

      boxShadow: {
        pr: '0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        card: '0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        select: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'select-options':
          '0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05),0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'profile-menu': '0 0 8px 0 rgba(88, 83, 141, 0.12)'
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
