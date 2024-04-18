<template>
  <div class="a">
    我是A组件
    <button @click="sendToy">给A组件送玩具</button>
    <B></B>
  </div>
</template>
<script setup lang="ts" name="A">
  import { ref } from 'vue'
  // 导入emiiter对象
  import emitter from '@/utils/emitter'
  // 导入子组件
  import B from './B.vue'
  let car = ref()
  function sendToy() {
    // 触发事件，传递数据
    emitter.emit('send-toy', '凹凸曼')
  }
</script>
