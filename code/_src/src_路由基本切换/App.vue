<template>
  <div class="app">
    <!-- 一般组件放在components中 -->
    <Header />
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
      <RouterLink to="/about" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <!-- 将路由对应组件嵌入该区域 -->
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script lang="ts" setup name="App">
  // 导入路由组件
  import { RouterLink, RouterView } from 'vue-router'
  // 一般组件
  import Header from '@/components/Header.vue'
</script>
<style scoped>
  .active {
    color: blueviolet;
  }
</style>
