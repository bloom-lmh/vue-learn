
import axios from 'axios'
import { reactive } from 'vue'

export default function () {
  let dogList = reactive(['https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'])
  async function getDog() {
    try {
      let { data } = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      dogList.push(data.message)
    } catch (error) {
      console.log(error)
    }
  }
  return { dogList, getDog }
}

