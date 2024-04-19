<template>
  <div class="child">
    <h2>我是Child组件</h2>
    <h3>当前求和为:{{ sum }}</h3>
    <div>{{ content }}</div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import axios from 'axios'
  let sum = ref(1)
  let {
    data: { content }
  } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  console.log(content)
</script>

<style scoped></style>
