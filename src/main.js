import { createApp } from 'vue'
import store from './store'
import router from './router'
import './main.css'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

// TODO: Вынести настройки в файл notify.js
const options = {
    hideProgressBar: true,
    transition: 'Vue-Toastification__fade',
    showCloseButtonOnHover: true,
    timeout: 2000
};

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Toast, options)

app.mount('#app')


