import { createApp } from 'vue'
import './style.css'
import './global.scss'
import App from './App.vue'
import router from './router/index'
import 'animate.css'
import { useElementIcons } from './plugins/element-icon'
const app = createApp(App)
useElementIcons(app)
app.use(router)
app.mount('#app')
