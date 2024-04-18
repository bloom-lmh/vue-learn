<template>
  <div class="father">
    我是父亲,有房产{{ house }}套
    <Child1 ref="c1" />
    <Child2 ref="c2" />
    <!-- 点击添加孩子书籍-->
    <button @click="addChildrensBook($refs)">为孩子添加书籍</button>
  </div>
</template>
<script setup lang="ts" name="Father">
  import { ref } from 'vue'
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'
  let house = ref(1)
  // 为孩子添加书籍
  function addChildrensBook(refs: any) {
    for (const key in refs) {
      refs[key].book++
    }
  }
  // 暴露数据
  defineExpose({ house })
</script>
