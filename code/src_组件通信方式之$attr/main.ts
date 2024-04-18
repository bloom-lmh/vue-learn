import { createApp } from "vue";
// 导入根组件
import App from './App.vue'
// 导入emitter
import emitter from "./utils/emitter";
// 创建根组件
const app = createApp(App)
app.mount('#app')