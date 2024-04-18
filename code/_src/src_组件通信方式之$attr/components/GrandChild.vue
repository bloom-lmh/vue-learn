<template>
  我是孙子组件
  <div class="grandChild">
    来子祖组件的数据
    <div>{{ b + ' ' + x + '' + y }}</div>
    <button @click="updateA(6)">点击向祖组件传递数据</button>
  </div>
</template>
<script setup lang="ts" name="GrandChild">
  defineProps(['b', 'x', 'y', 'updateA'])
</script>
