// Удалить, когда WebStorm начнёт поддерживать алиасы Vite
// REF: https://stackoverflow.com/questions/71613474/cannot-resolve-directory-in-webstorm-for-a-vue-file

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src')
        }
    }
}
