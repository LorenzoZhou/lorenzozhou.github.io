import { createApp } from 'vue'
import App from './App.vue'
import common from './plugins/common'
import router  from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import './style.css'
import './assets/icon1/iconfont'
import 'element-plus/dist/index.css'

const pinia = createPinia();
const app = createApp(App) 
app.use(common).use(router).use(pinia).use(ElementPlus)

app.mount('#app')
