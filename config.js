// Удалить, когда WebStorm начнёт поддерживать алиасы Vite
// REF: https://stackoverflow.com/questions/71613474/cannot-resolve-directory-in-webstorm-for-a-vue-file

import path from 'path'

module.exports = {
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src')
        }
    }
}
