
import { ref } from 'vue'
export default () => {
  let sum = ref(0)
  function handleSum() {
    sum.value++
  }
  return { sum, handleSum }
}
