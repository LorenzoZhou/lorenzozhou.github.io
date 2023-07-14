<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue';
import {usePicsStore} from '../stores/pics'
import DogPics from '../components/DogPics.vue';
import { getCurrentInstance } from 'vue';
import {ElMessage} from 'element-plus'

const pics = usePicsStore()

let msg = null


function love(pic) {
  pics.love(pic)
  if (msg)
    msg.close()
  msg = ElMessage('love')
}
function unlove(pic) {
  pics.unlove(pic)
  if (msg)
    msg.close()
  msg = ElMessage('unlove')
}

</script>

<template>
  <DogPics 
    :pics="pics.data"
    @love="love"
    @unlove="unlove"
    />
</template>

<style scoped>
</style>