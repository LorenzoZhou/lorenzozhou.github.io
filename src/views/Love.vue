<script setup>
import { ref, computed } from 'vue'
import Header from '../components/Header.vue';
import DogPics from '../components/DogPics.vue'
import { usePicsStore } from '../stores/pics';

const pics = usePicsStore()
console.log(pics)

const lovedPics = computed(()=> pics.data.filter(pic=> pic.loved))
</script>

<template>
  <Header />
  <DogPics
    v-if="lovedPics.length"
    :pics="lovedPics"
    @love="pics.love"
    @unlove="pics.unlove"
    />
  <div v-else>小主，您还没有喜欢的图片哦~~~</div>
</template>

<style scoped>
</style>