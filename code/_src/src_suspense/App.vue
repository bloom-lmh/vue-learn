<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>加载中.......</h3>
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup name="App">
  import { defineAsyncComponent, Suspense } from 'vue'
  const Child = defineAsyncComponent(() => import('@/components/Child.vue'))
</script>
