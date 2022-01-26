module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,vue}'],
    theme: {
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
            'green-1': '#0b8c56',
            'green-2': '#e3d464',
            'green-3': '#11613f',
            'gray-1': '#6c6d6d',
            'gray-2': '#f0f0f0',
            'gray-3': '#27262c',
            'orange': '#de6830',
            'pink': '#ff7171'
        }
    }
}
