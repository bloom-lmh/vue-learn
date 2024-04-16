<template>
  <div>
    <ul>
      <li>编号：{{ id }}</li>
      <li>标题：{{ title }}</li>
      <li>内容：{{ content }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup name="News">
  // 以props的方式接受路由传参
  defineProps(['id', 'title', 'content'])
</script>
