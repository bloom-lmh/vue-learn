<template>
  <div class="LoveTalk">
    <button @click="getATalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.content }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="LoveTalk">
  // 导入talk状态管理构造器
  import { useTalkStore } from '@/store/loveTalk'
  // 创建talk状态管理器
  const talkStore = useTalkStore()
  // 获取状态
  let talkList = talkStore.talkList
  function getATalk() {
    talkStore.getLoveTalk()
  }
</script>
