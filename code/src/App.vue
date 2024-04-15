<template>
  <!-- 向子组件传递数据 -->
  <Person :list="persons" />
</template>
<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import { reactive } from 'vue'
  // 导入数据类型
  import { type Persons } from './types'
  // 定义person对象数组
  let persons = reactive<Persons>([
    { id: 'asdasdas', name: '张三', age: 12 },
    { id: 'cse1asda', name: '李四', age: 13 }
  ])
</script>
<style></style>
