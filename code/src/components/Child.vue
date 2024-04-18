<template>
  <div class="grand-child">
    <h3>我是孙组件</h3>
    <h4>资产：{{ money }}</h4>
    <h4>汽车：{{ car }}</h4>
    <button @click="updateMoney(6)">点我</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
  import { inject } from 'vue'
  // 注入数据 逗号后面是提供的一个默认值
  let { money, updateMoney } = inject('moneyContext', { money: 0, updateMoney: (x: number) => {} })
  let car = inject('car')
</script>
