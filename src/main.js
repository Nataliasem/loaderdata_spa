import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.js'
import './main.css'

// const pinia = createPinia()
//
// if (localStorage.getItem('userState')) {
//   pinia.state.value.user = JSON.parse(localStorage.getItem('userState'))
// }
//
// watch(
//   () => pinia.state.value.user,
//   (state) => localStorage.setItem('userState', JSON.stringify(state)),
//   { deep: true }
// )

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
