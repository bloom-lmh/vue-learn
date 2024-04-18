// 导入store
import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
  // 动作
  actions: {
    // 加
    increment(value: number) {
      // 进行逻辑判断，若sum值小于10再进行加
      if (this.sum < 10) this.sum += value;
    },
    // 减
    decrement(value: number) {
      if (this.sum > 1) {
        this.sum -= value
      }
    }
  },
  // 状态
  state() {
    return {
      sum: 6,
      num: 0
    }
  },
  // 计算
  getters: {}
})