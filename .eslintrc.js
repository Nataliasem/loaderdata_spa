module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        node: true,
        jest: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
        // TODO: плагин для jsdoc
    ],
    rules: {
        // Errors
        'eqeqeq': 'error', // Всегда используем строгие сравнения
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
        'yoda': 'error', // Не используем Йода-условия,
        'require-await': 'error', // Всегда используем await в асинхронных функциях с оператором async
        // Formatting
        'quotes': ['error', 'single'], // Используем одинарные кавычки (backtick по необходимости)
        'no-multi-spaces': 'error', // Запрещаем использовать лишние пробелы
        'curly': ['error', 'all'], // Фигурные скобки, даже если в выражении только один блок
        'no-trailing-spaces': 'error', // Никаких висящих пробелов
        'linebreak-style': ['error', 'unix'], // Единообразные символы окончания строк
        'eol-last': ['error', 'always'], // В конце файла всегда пустая строка
        'comma-style': 'error', // Запятую ставим всегда в той же строке, что и элемент списка
        'comma-dangle': 'error', // Не используем висячие запятые
        'comma-spacing': 'error', //  Запретить пробелы перед запятыми

        // Vue plugins
        'vue/multi-word-component-names': ['error', {
            'ignores': ['index']
        }]
    }
}
