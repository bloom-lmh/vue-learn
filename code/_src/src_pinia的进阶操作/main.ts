import { createApp } from "vue";
// 导入根组件
import App from './App.vue'
// 导入pinia
import { createPinia } from "pinia";
// 创建pinia
const pinia = createPinia()
// 创建根组件
const app = createApp(App)
// 注册pinia
app.use(pinia)
app.mount('#app')