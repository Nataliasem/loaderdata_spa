import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const path = require('path')


export default defineConfig({
    resolve:{
        alias:{
            '~' : path.resolve(__dirname, './src')
        }
    },
    plugins: [vue()]
})
