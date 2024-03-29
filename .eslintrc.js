module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/recommended',
    'plugin:promise/recommended',
    'prettier'
  ],
  plugins: ['prettier', 'import'],
  rules: {
    // PRETTIER
    'prettier/prettier': 'warn',

    // IMPORT
    'import/no-unresolved': 'warn',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never'
      }
    ],

    // ESLINT
    'eol-last': ['error', 'always'],
    'quotes': ['error', 'single'],
    'curly': ['error', 'all'],
    'linebreak-style': ['error', 'unix'],
    'no-trailing-spaces': 'error',
    'eqeqeq': 'error',
    'radix': 'error',
    'prefer-const': 'warn',
    'no-unneeded-ternary': 'error',
    'no-bitwise': 'error',
    'no-implicit-coercion': 'error',
    'no-template-curly-in-string': 'error',
    'consistent-return': 'error',
    'no-floating-decimal': 'error',
    'no-multi-spaces': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-useless-concat': 'error',
    'yoda': 'error',
    'require-await': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: '*' }
    ],

    // PROMISE
    'promise/always-return': 'off',
    'promise/catch-or-return': ['error', { allowFinally: true }],
    'promise/no-return-wrap': ['warn', { allowReject: true }],

    // VUE
    'vue/no-multiple-template-root': 'off',
    'vue/component-api-style': ['warn', ['script-setup', 'composition']]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {},
      alias: {
        map: [['~', './src']],
        extensions: ['.js', '.json', '.ts', '.vue']
      }
    }
  }
}
