<template>
  <div class="app">
    <!-- 导航区 -->
    <!-- 展示区 -->
    <div class="main-content">
      <Count />
      <LoveTalk />
    </div>
  </div>
</template>
<script lang="ts" setup name="App">
  import Count from './components/Count.vue'
  import LoveTalk from './components/LoveTalk.vue'
</script>
