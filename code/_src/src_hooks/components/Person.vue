<template>
  <div class="person">
    <h2>sum:{{ sum }}</h2>
    <button @click="handleSum">点击加一</button>
    <hr />
    <img v-for="(dog, index) in dogList" :key="index" :src="dog" alt="" />
    <button @click="getDog">获取狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import useDog from '@/hooks/useDog'
  import useSum from '@/hooks/useSum'
  const { sum, handleSum } = useSum()
  const { getDog, dogList } = useDog()
</script>
