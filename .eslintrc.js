module.exports = {
  root: true,
  env: {
    jest: true,
    es2021: true,
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'sonarjs',
    'jsdoc',
    'promise'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:jsdoc/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // Errors
    'no-self-compare': 'error', // Запрещаем сравнивать переменную с самой собой
    // Suggestions
    'no-unneeded-ternary': 'error', // Отключаем ненужное использование тернарных операторов
    'no-bitwise': 'error', // Не используем битовые (поразрядные) операторы
    'no-implicit-coercion': 'error', // Запрещаем неявное преобразование типов
    'no-template-curly-in-string': 'error', // Не используем синтаксис шаблонов в обычной строке (без backtick)
    'consistent-return': 'error', // Функция всегда возвращает консистентное значение,
    'no-floating-decimal': 'error', // Дробное число не может начинаться со знака точки или заканчиваться им
    'no-sequences': 'error', // Не используем оператор Запятая,
    'no-useless-concat': 'error', // Не используем конкатенацию строк без необходимости,
    yoda: 'error', // Не используем Йода-условия,
    'require-await': 'error', // Всегда используем await в асинхронных функциях с оператором async
    // Formatting
    quotes: ['error', 'single'], // Используем одинарные кавычки (backtick по необходимости)
    'no-multi-spaces': 'error', // Запрещаем использовать лишние пробелы
    curly: ['error', 'all'], // Фигурные скобки, даже если в выражении только один блок
    'no-trailing-spaces': 'error', // Никаких висящих пробелов
    'linebreak-style': ['error', 'unix'], // Единообразные символы окончания строк
    'eol-last': ['error', 'always'], // В конце файла всегда пустая строка
    'comma-style': 'error', // Запятую ставим всегда в той же строке, что и элемент списка
    'comma-dangle': 'error', // Не используем висячие запятые
    'comma-spacing': 'error', //  Запретить пробелы перед запятыми


    // [IMPORT]
    'import/no-unresolved': 'error', // Проверять импорты на существование файлов
    'import/no-named-as-default-member': 'off', // Использовать именованные импорты вместо дефолтного обращения к свойствам
    'import/extensions': ['error', 'always', { ignorePackages: true }], // Импорты с расширениями файлов
    'import/no-absolute-path': 'error', // Никаких импортов со слэша
    'import/no-webpack-loader-syntax': 'error', // Никакой настройки webpack в импорте
    'import/no-self-import': 'error', // Никакого импорта самого себя
    'import/no-useless-path-segments': 'error', // Никаких лишних сегментов в пути
    'import/no-extraneous-dependencies': 'error', // Никаких библиотек, не указанных в package.json
    'import/newline-after-import': 'error', // Пустая строка после импортов
    'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }], // Импорты в едином порядке
    'import/named': 'error', // Проверяет существование именованных импортов

    // [SONARJS]
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-extra-arguments': 'warn',
    'sonarjs/no-identical-functions': 'warn',

    // [JSDOC]
    'jsdoc/newline-after-description': ['warn', 'never'],
    'jsdoc/require-description': 'warn', // Обязательно описываем параметры
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-returns': ['warn', { forceRequireReturn: true }],
    'jsdoc/valid-types': 'error',

    // [VUE]
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index']
      }
    ],
    'vue/no-invalid-model-keys': 'error', // Секция model без опечаток
    'vue/no-multiple-objects-in-class': 'error', // Несколько объектов в биндингах не нужны
    'vue/no-reserved-component-names': 'error', // Не именовать компоненты зарезервированными именами
    'vue/no-restricted-v-bind': 'error', // Проверка корректных v-bind
    'vue/no-unused-refs': 'warn', // Проверка на неиспользуемые refs
    'vue/require-direct-export': 'error', // Проверка, что компонент экспортируется напрямую
    'vue/v-on-event-hyphenation': ['error', 'always'], // Проверка кейса событий
    'vue/no-v-html': 'error', // Вместо них используем v-safe-html / v-markdown
    'vue/no-use-v-if-with-v-for': 'error', // Не использовать v-for + v-if одновременно на теге
    'vue/no-mutating-props': 'warn', // Не мутировать входные параметры
    'vue/padding-line-between-blocks': ['error', 'always'], // Пустая строка между секциями
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'] // Порядок секций в компонентах
      }
    ],
    'vue/no-empty-component-block': 'error', // Не оставляем пустые секции
    'vue/custom-event-name-casing': 'warn', // Именование событий без camelCase
    'vue/component-definition-name-casing': ['error', 'kebab-case'], // Имена компонентов в kebab-case
    'vue/component-name-in-template-casing': [
      // Имена компонентов в шаблоне в kebab-case
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    'vue/html-comment-content-spacing': 'error', // Пробелы в комментариях
    'vue/no-boolean-default': ['warn', 'default-false'], // default: false в булевых входных параметров
    'vue/no-potential-component-option-typo': ['error', { presets: ['all'] }], // Возможные опечатки в названиях секций компонентов
    'vue/no-template-target-blank': 'error', // Все ссылки с target="_blank"
    'vue/no-unused-properties': [
      'warn',
      {
        groups: ['props', 'data', 'computed', 'methods', 'setup']
      }
    ], // Проверка неиспользуемых свойств
    'vue/no-useless-mustaches': 'error', // Лишнее использование интерполяции для вставки текста
    'vue/no-useless-v-bind': 'error', // Лишний биндинг для строк
    'vue/require-name-property': 'error', // У компонентов должна быть опция name
    'vue/v-for-delimiter-style': 'error', // Единый стиль разделителя для v-for
    'vue/eqeqeq': 'error', // Использование только строгих сравнений
    'vue/no-irregular-whitespace': 'error', // Проверка на нестандартные отступы
    'vue/prop-name-casing': 'off', // Отключаем проверку camelCase входных параметров
    'vue/no-constant-condition': 'error', // Постоянные условия в шаблоне
    'vue/valid-next-tick': 'error',
    // У кнопок должен быть указан type
    'vue/html-button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false
      }
    ],
    'vue/next-tick-style': ['warn', 'callback'],
    'vue/v-on-function-call': ['error', 'never'],

    // [VUE] Максимум атрибутов в строке
    // WARN, потому что в некоторых случаях ESLINT/PRETTIER конфликтуют
    // REF: https://github.com/prettier/prettier/issues/5501
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 4,
        multiline: 1
      }
    ],

    // [VUE] Авто-закрытие тегов
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],

    // [VUE] Порядок опций в компонентах
    'vue/order-in-components': 'error'
  },
  settings: {
    // [IMPORT] Чтобы ESLint понимал импорты файлов с ~
    'import/resolver': {
      alias: {
        map: [['~', './src']]
      }
    }
  }
}
