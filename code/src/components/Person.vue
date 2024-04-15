<template>
  <div class="person">
    <ul>
      <li v-for="person in list" :key="person.id">姓名：{{ person.name }} -- 年龄 ：{{ person.age }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { defineProps } from 'vue'
  // 接受父组件传来的数组，并保存
  let persons = defineProps(['list'])
</script>
