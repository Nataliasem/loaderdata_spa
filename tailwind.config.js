module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        'ld-xs': '1px',
        'ld-sm': '2px',
        'ld-md': '4px'
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
      'primary': '#092C4C',
      'secondary': '#F2994A',
      'info': '#2F80ED',
      'success': '#27AE60',
      'warning': '#E2B93B',

      'red-1': '#EB5757',
      'red-2': '#FFD8D8',
      'red-3': '#FFF5F5',

      'green-1': '#0B8C56',
      'green-2': '#11613F',
      'green-3': '#3da378',

      'black-1': '#000000',
      'black-2': '#1D1D1D',
      'black-3': '#282828',

      'gray-1': '#333333',
      'gray-2': '#4F4F4F',
      'gray-3': '#828282',
      'gray-4': '#BDBDBD',
      'gray-5': '#E0E0E0',
      'gray-6': '#F5F5F5'
    }
  }
}
