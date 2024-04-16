<template>
  <div>
    <ul>
      <!-- 导航区 -->
      <li v-for="news in newsList">
        <button @click="toDetail(news)">点击查看详情</button>
        <RouterLink
          :to="{
            name: 'xiangqing',
            params: {
              id: news.id,
              title: news.title,
              content: news.content
              // 不能有数组
              // arr:[1,2,3]
            }
          }"
          >{{ news.title }}</RouterLink
        >
      </li>
    </ul>
    <!-- 展示区 -->
    <!-- 将路由对应组件嵌入该区域 -->
    <RouterView></RouterView>
  </div>
</template>
<script lang="ts" setup name="News">
  import { reactive } from 'vue'
  import { RouterLink, RouterView, useRouter } from 'vue-router'
  const newsList = reactive([
    { id: 'asdasd', title: '很好的抗癌的食物', content: '西南花' },
    { id: 'escasa', title: '好消息！，好消息！', content: '福利领取' },
    { id: 'basd1a', title: '万万没想到..', content: '某高校' }
  ])
  interface INews {
    id: string
    title: string
    content: string
  }
  // 创建路由器对象
  let router = useRouter()
  // 跳转详情页
  function toDetail(news: INews) {
    // RouterLink中to怎么写，push中就可以怎么写
    // 当然还可以写replace
    router.push({
      name: 'xiangqing',
      params: {
        id: news.id,
        title: news.title,
        content: news.content
      }
    })
  }
</script>
