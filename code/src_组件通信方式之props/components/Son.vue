<template>
  <div class="son">
    我是孩子结点 父亲给的玩具:{{ toy }}
    <button @click="getCar(car)">点我向父节点发送数据</button>
  </div>
</template>
<script setup lang="ts" name="Son">
  import { ref } from 'vue'
  let car = ref('奔驰')
  defineProps(['toy', 'getCar'])
</script>
