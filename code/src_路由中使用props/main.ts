import { createApp } from "vue";
// 导入根组件
import App from './App.vue'
// 导入路由
import router from './router'
const app = createApp(App)
// 注册路由
app.use(router)
app.mount('#app')