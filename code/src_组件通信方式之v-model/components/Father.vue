<template>
  <div class="father">
    <MyInput :modelValue="username" @update:modelValue="username = $event" />
  </div>
</template>
<script setup lang="ts" name="Father">
  import { ref, watch } from 'vue'
  let username = ref('zhangsan')
  // 监控username
  watch(username, value => {
    console.log(value)
  })
  // 导入自己封装的组件库
  import MyInput from './MyInput.vue'
</script>
