<template>
  我是孩子组件
  <div class="child">
    接受父组件传来的props参数{{ a }}
    <GrandChild v-bind="$attrs" />
  </div>
</template>
<script setup lang="ts" name="Child">
  // 导入子组件
  import GrandChild from './GrandChild.vue'
  defineProps(['a'])
</script>
