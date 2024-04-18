<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>
<script setup lang="ts" name="Count">
  import { ref } from 'vue'
  let n = ref(1)
  // 导入sum状态管理构造器
  import { useCountStore } from '@/store/count'
  // 创建状态管理器
  const countStore = useCountStore()
  function add() {
    // 改变状态的方式一:直接修改状态
    // countStore.sum += n.value
    // 改变状态的方式二:直批量修改
    /* countStore.$patch({
      sum: countStore.sum + n.value,
      num: countStore.num++
    }) */
    // 改变状态的方式三:使用action操作
    countStore.increment(n.value)
  }
  function minus() {}
</script>
