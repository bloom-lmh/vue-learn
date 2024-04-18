// 导入store
import { defineStore } from "pinia";
import { nanoid } from "nanoid";
export const useTalkStore = defineStore('talk', {
  // 动作
  actions: {
    // 获取情话
    async getLoveTalk() {
      let talkObj = { id: nanoid(), content: 'test' }
      this.talkList.unshift(talkObj)
    }
  },
  // 状态
  state() {
    return {
      talkList: JSON.parse(localStorage.getItem("talkList") as string) || []
    }
  },
  // 计算
  getters: {}
})