import { createApp } from 'vue'
import Toast from 'vue-toastification'
import App from './App.vue'
// eslint-disable-next-line import/extensions,import/no-unresolved
import router from './router'
import store from './store/index.js'
import './main.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Toast, {transition: 'Vue-Toastification__fade'})

app.mount('#app')
