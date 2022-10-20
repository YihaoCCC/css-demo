import { createApp } from 'vue'
import './style.css'
import './global.scss'
import App from './App.vue'
import router from './router/index'
import 'animate.css'
import { useElementIcons } from './plugins/element-icon'
import { createPinia } from 'pinia'
const app = createApp(App)
// 这里的全局变量由于没有响应式，不能用来控制UI改变，采用全局store的模式
// app.config.globalProperties.$showModal = false
app.use(createPinia())
useElementIcons(app)
app.use(router)
app.mount('#app')
