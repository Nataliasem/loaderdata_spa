import { createApp } from 'vue'
import store from './store'
import router from './router'
import './main.css'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';


import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Toast)

app.mount('#app')


