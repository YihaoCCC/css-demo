import { createApp } from 'vue'
import './style.css'
import './global.scss'
import App from './App.vue'
import router from './router/index'
import 'animate.css'
const app = createApp(App)
app.use(router)
app.mount('#app')
