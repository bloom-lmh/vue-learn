<template>
  <div class="father">
    <div class="content">
      <Category title="热门游戏列表">
        <ul>
          <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
      </Category>
      <Category title="今日美食推荐">
        <img :src="imgUrl"></img>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import { reactive } from 'vue'
  import Category from './Category.vue'
  let games = reactive([
    { id: 'case1asdas', name: 'lol' },
    { id: 'asd1e1asd2', name: '红色警戒' },
    { id: 'casd1e1asd', name: '王者荣耀' }
  ])
  let imgUrl =
    'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E7%BE%8E%E9%A3%9F&step_word=&hs=0&pn=0&spn=0&di=46137345&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=688035008%2C115679341&os=1399649545%2C377845611&simid=3170723611%2C4053631918&adpicid=0&lpn=0&ln=1955&fr=&fmq=1713447246788_R&fm=index&ic=0&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=11&oriquery=&objurl=https%3A%2F%2Fp9-pc-sign.douyinpic.com%2Ftos-cn-i-0813%2FowzMAhOAkI0q6fLAACVtBTanxMANCegNUyEmAA~tplv-dy-aweme-images%3Aq75.webp&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B157ytg_z%26e3Bv54AzdH3Fg5pjAzdH3F0na8mln80dc98l8b90n&gsm=1e&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined&lid=8080017232488056544'
</script>
