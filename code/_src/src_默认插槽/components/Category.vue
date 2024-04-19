<template>
  <div class="category">
    <h2>{{ title }}</h2>
    <!-- 提供插入位置 -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="Category">
  defineProps(['title'])
</script>
