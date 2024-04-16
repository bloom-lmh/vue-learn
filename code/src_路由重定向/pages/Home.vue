<template>
  <div>home</div>
</template>
<script setup lang="ts" name="Home">
  import { useRouter } from 'vue-router'
  import { onMounted } from 'vue'
  let router = useRouter()
  onMounted(() => {
    setTimeout(() => {
      // 当然也可以使用replace
      router.push('/news')
    }, 3000)
  })
</script>
