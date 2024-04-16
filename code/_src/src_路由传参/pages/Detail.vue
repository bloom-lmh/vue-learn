<template>
  <div>
    <ul>
      <li>编号：{{ news.id }}</li>
      <li>标题：{{ news.title }}</li>
      <li>内容：{{ news.content }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup name="News">
  // 导入路由hooks
  import { toRefs } from 'vue'
  import { useRoute } from 'vue-router'
  let route = useRoute()
  let { params: news } = toRefs(route)
</script>
