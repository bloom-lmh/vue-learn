<template>
  <div class="b">我是B组件 A组件的玩具{{ toy }}</div>
</template>
<script setup lang="ts" name="B">
  // 获取事件发送对象
  import emitter from '@/utils/emitter'
  import { onUnmounted, ref } from 'vue'
  let toy = ref()
  // 绑定事件
  emitter.on('send-toy', value => {
    toy.value = value
  })
  // 组件卸载的时候解绑
  onUnmounted(() => {
    emitter.off('send-toy')
  })
</script>
