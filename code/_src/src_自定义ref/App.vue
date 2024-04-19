<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
  </div>
</template>
<script lang="ts" setup name="App">
  import useCustomRef from './hooks/useCustomRef'
  // 自定义ref
  let { msg } = useCustomRef('尚硅谷', 1000)
</script>
