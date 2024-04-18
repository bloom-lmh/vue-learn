<template>
  <div class="child2">我是孩子2 我有玩具：{{ toy }} 书籍：{{ book }}</div>
</template>
<script setup lang="ts" name="Child2">
  import { ref } from 'vue'
  let toy = ref('凹凸曼')
  let book = ref(2)
  // 开放数据访问
  defineExpose({ toy, book })
</script>
