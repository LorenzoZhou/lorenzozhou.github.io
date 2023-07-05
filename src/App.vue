<script setup>
import Header from './components/Header.vue';
import { getCurrentInstance } from 'vue';
import { usePicsStore } from './stores/pics'

const app = getCurrentInstance().appContext
const pics = usePicsStore()


console.log('请求图片数据')
app.config.globalProperties.$axios.get("/breeds/image/random/50").then((res) => {
  if (res.data.status === "success") {
    res.data.message.forEach((msg) =>
      pics.data.push({
        src: msg,
        loved: false,
      })
    );
  }
})

</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
