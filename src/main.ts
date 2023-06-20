import { createApp } from 'vue'
import './style.css'
import './global.scss'
import App from './App.vue'
import router from './router/index'
import 'animate.css'
import { useElementIcons } from './plugins/element-icon'
import myDirectives from './plugins/my-directives'
import { createPinia } from 'pinia'

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';


// 引入所有语言包
import hljs from 'highlight.js';
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});


const app = createApp(App)
// 这里的全局变量由于没有响应式，不能用来控制UI改变，采用全局store的模式
// app.config.globalProperties.$showModal = false
app.use(VMdPreview);
myDirectives(app)
app.use(createPinia())
useElementIcons(app)
app.use(router)
app.mount('#app')
