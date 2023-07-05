<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue';

const isLoading = ref(true)

setTimeout(()=> {
  isLoading.value = false
}, 3000)

</script>

<template>
  <Header />
  <h2>我的</h2>
  <el-button type="primary" loading 
    v-if="isLoading">Loading</el-button>
  <el-button v-else>Active</el-button>
</template>

<style scoped>
</style>