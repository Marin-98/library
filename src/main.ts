import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from './http'
import * as ElIconModules from '@element-plus/icons-vue'



const app = createApp(App)

// 全局挂载axios
app.config.globalProperties.$axios = axios;

app.use(ElementPlus);
app.use(store)
app.use(router)

Object.keys(ElIconModules).forEach(function (key) {
    app.component(ElIconModules[key].name, ElIconModules[key])
})
app.mount('#app')
