import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import App from './App.vue'
import router from '@router/index'
import store from '@store'
import '@router/permission'
import scssToObject from '@utils/scss.js'

import { setupProdMockServer } from '@mock/mockServer'
setupProdMockServer()

const app = createApp(App)
app.config.globalProperties.scssToObject = scssData => {
    return scssToObject(scssData)
}

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
