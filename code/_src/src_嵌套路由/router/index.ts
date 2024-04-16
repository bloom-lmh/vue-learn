import { createRouter, createWebHistory } from "vue-router";
// 导入组件
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import Detail from "@/pages/Detail.vue";
// 创建路由器,传入路由表
const router = createRouter({
  // 路由的工作模式 hash模式和history模式
  history: createWebHistory(),
  // 路由表规则
  routes: [
    {
      name: "zhuye",
      path: '/home',
      component: Home
    },
    {
      name: 'xinwen',
      path: '/news',
      component: News,
      children: [
        {
          name: 'xiang',
          path: 'detail',
          component: Detail
        }
      ]
    },
    {
      name: 'guanyu',
      path: '/about',
      component: About
    }
  ]
})
// 导出路由
export default router