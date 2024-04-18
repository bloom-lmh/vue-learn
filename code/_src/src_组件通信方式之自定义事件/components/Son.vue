<template>
  <div class="son">
    我是孩子结点
    <button @click="sendCar">点我向父节点发送数据</button>
  </div>
</template>
<script setup lang="ts" name="Son">
  // 获取事件发送对象
  let emit = defineEmits(['send-car'])
  function sendCar() {
    // 触发事件
    emit('send-car', '宝马')
  }
</script>
