import { createApp } from "vue";
// 导入根组件
import App from './App.vue'

// 创建根组件
const app = createApp(App)
// 导入组件作全局组件
import Child from "./components/Child.vue";
app.component('Child', Child)
// 全局属性
app.config.globalProperties.x = 99
declare module 'vue' {
  interface ComponentCustomPropertiesP {
    x: number
  }
}
app.mount('#app')