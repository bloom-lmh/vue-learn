<template>
  <div class="father">
    我是父亲节点 儿子给的车：{{ car }}
    <Son :toy="toy" :getCar="getCar"></Son>
  </div>
</template>
<script setup lang="ts" name="Father">
  // 导入子组件
  import { ref } from 'vue'
  import Son from './Son.vue'
  let toy = ref('凹凸曼')
  let car = ref()
  // 子组件调用getCar函数为父组件传递数据
  function getCar(value: any) {
    car.value = value
  }
</script>
