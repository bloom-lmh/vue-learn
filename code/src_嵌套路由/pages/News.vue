<template>
  <div>
    <!-- 导航区 -->
    <RouterLink v-for="news in newsList" to="/news/detail">{{ news.title }}</RouterLink>
    <!-- 展示区 -->
    <!-- 将路由对应组件嵌入该区域 -->
    <RouterView></RouterView>
  </div>
</template>
<script lang="ts" setup name="News">
  import { reactive } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'

  const newsList = reactive([
    { id: 'asdasd', title: '很好的抗癌的食物', content: '西南花' },
    { id: 'escasa', title: '好消息！，好消息！', content: '福利领取' },
    { id: 'basd1a', title: '万万没想到..', content: '某高校' }
  ])
</script>
