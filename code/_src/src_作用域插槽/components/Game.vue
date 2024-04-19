<template>
  <div class="game">
    <h2>今日游戏榜单</h2>
    <slot name="s1" :games="games" a="哈哈"></slot>
  </div>
</template>

<script setup lang="ts" name="Game">
  import { reactive } from 'vue'
  let games = reactive([
    { id: 'asgdytsa01', name: '英雄联盟' },
    { id: 'asgdytsa02', name: '王者荣耀' },
    { id: 'asgdytsa03', name: '红色警戒' },
    { id: 'asgdytsa04', name: '斗罗大陆' }
  ])
</script>
