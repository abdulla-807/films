import './assets/style/main.scss'
import routers from '@/routes'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(routers)
app.use(pinia)
app.mount('#app')
