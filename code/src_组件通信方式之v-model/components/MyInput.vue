<template>
  <input type="text" :value="modelValue" @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)" />
</template>
<script setup lang="ts" name="MyInput">
  // 接受父组件传来的props参数
  defineProps(['modelValue'])
  // 定义事件触发器
  let emit = defineEmits(['update:modelValue'])
</script>
