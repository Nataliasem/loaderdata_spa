import { createApp } from 'vue'
import Toast from 'vue-toastification';
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import './main.css'

import 'vue-toastification/dist/index.css';

// TODO: Вынести настройки в файл notify.js
const options = {
    hideProgressBar: true,
    transition: 'Vue-Toastification__fade',
    showCloseButtonOnHover: true,
    timeout: 2000
};



const app = createApp(App)

app.use(router)
app.use(store)
app.use(Toast, options)

app.mount('#app')


