<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>资产：{{ money }}</h4>
    <h4>汽车：{{ car }}</h4>
    <button @click="money += 1">资产+1</button>
    <button @click="car.price += 1">汽车价格+1</button>
    <Child />
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import { ref, reactive, provide } from 'vue'
  // 数据
  let money = ref(100)
  let car = reactive({
    brand: '奔驰',
    price: 100
  })
  // 用于更新money的方法
  function updateMoney(value: number) {
    money.value += value
  }
  // 提供数据
  provide('moneyContext', { money, updateMoney })
  provide('car', car)
</script>
