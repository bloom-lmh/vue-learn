<template>
  <div class="father">
    <!-- 子组件提供的全部数据被封装在了params中 -->
    <Game v-slot:s1="params">
      <ul>
        <li v-for="g in params.games" :key="g.id">{{ g.name }}</li>
      </ul>
    </Game>
  </div>
</template>
<script setup lang="ts" name="Game">
  import Game from './Game.vue'
</script>
