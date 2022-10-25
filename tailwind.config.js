module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        'ld-xs': '1px',
        'ld-sm': '2px',
        'ld-md': '4px',
        'ld-xl': '8px'
      }
    },
    spacing: {
      0: '0px',
      px: '1px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
      20: '80px',
      23: '92px',
      24: '96px',
      32: '128px',
      40: '160px',
      48: '192px',
      53: '212px',
      56: '224px',
      64: '256px'
    },
    fontWeight: {
      regular: 400,
      bold: 600
    },
    fontSize: {
      'size-11': ['11px', '140%'],
      'size-13': ['13px', '140%'],
      'size-14': ['14px', '140%'],
      'size-15': ['15px', '140%'],
      'size-16': ['16px', '140%'],
      'size-18': ['18px', '140%'],
      'size-22': ['22px', '140%'],
      'size-30': ['30px', '140%'],
      'size-42': ['42px', '140%']
    },
    colors: {
      /* DEFAULT COLORS */
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': '#000000',
      'white': '#fff',

      /* THEME COLORS */
      'blue-1': '#2d3748',
      'blue-2': '#2C5282',
      'blue-3': '#109CF1',
      'blue-4': '#34AFF9',
      'blue-5': '#098EDF',
      'blue-6': '#E5F7FF',
      'grey-1': '#C2CFE0',
      'grey-2': '#f5f6f8',
      'grey-3': '#EDF2F7',
      'yellow': '#fdb946',
      'green-1': '#219553',
      'green-2': '#9AE6B4',
      'red': '#FC8181',
      'red-2': '#F7685B',
      'purple': '#885af8'
    }
  }
}
