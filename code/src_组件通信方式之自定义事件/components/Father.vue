<template>
  <div class="father">
    我是父亲节点 儿子给的车：{{ car }}
    <!-- 自定义事件send-car -->
    <Son @send-car="getCar"></Son>
  </div>
</template>
<script setup lang="ts" name="Father">
  // 导入子组件
  import { ref } from 'vue'
  import Son from './Son.vue'
  let car = ref()
  // 子组件触发事件，父组件接受自定义事件对象
  function getCar(value: any) {
    car.value = value
  }
</script>
