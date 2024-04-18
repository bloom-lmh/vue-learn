<template>
  <div class="child1">我是孩子1 我有电脑：{{ computer }} 书籍：{{ book }}</div>
  <!-- 继承父亲的房 -->
  <button @click="getHouse($parent)">继承父亲的房</button>
</template>
<script setup lang="ts" name="Child1">
  import { ref } from 'vue'
  let computer = ref('惠普')
  let book = ref(1)
  function getHouse(parent: any) {
    parent.house--
  }
  // 开放数据访问
  defineExpose({ computer, book })
</script>
