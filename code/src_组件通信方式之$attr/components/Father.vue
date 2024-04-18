<template>
  <div class="father">
    <!-- 向孩子组件传递数据  v-bind等价于:x="100" :y="100"-->
    <Child :a="a" :b="b" v-bind="{ x: 100, y: 200 }" :updateA="updateA" />
  </div>
</template>
<script setup lang="ts" name="Father">
  // 导入子组件
  import { ref } from 'vue'
  import Child from './Child.vue'
  let a = ref(1)
  let b = ref(2)
  function updateA(value: number) {
    a.value = value
  }
</script>
