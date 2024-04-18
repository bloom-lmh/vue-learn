<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <h2>当前求和倍数为：{{ mutipleSum }}</h2>
    <h2>{{ decoratorNum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
  </div>
</template>
<script setup lang="ts" name="Count">
  import { ref } from 'vue'
  let n = ref(1)
  // 导入sum状态管理构造器
  import { useCountStore } from '@/store/count'
  // 导入pinia的状态转换器
  import { storeToRefs } from 'pinia'
  // 创建状态管理器
  const countStore = useCountStore()
  // 将状态转换为响应式数据
  let { sum, mutipleSum, decoratorNum } = storeToRefs(countStore)
  function add() {
    countStore.increment(n.value)
    countStore.num++
  }
</script>
