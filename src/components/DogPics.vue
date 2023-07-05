<script setup>
import {ElMessage} from 'element-plus'

const props = defineProps(['pics'])
const emit = defineEmits(['love', 'unlove'])
</script>

<template>
    <ul>
        <li v-for="pic in props.pics" :key="pic.src">
            <img :src="pic.src">
            <svg v-if="pic.loved" class="icon" aria-hidden="true" @click="emit('unlove', pic)">
                <use xlink:href="#icon-aixin1"></use>
            </svg>
            <svg v-else class="icon" aria-hidden="true" @click="emit('love', pic)">
                <use xlink:href="#icon-aixin"></use>
            </svg>
        </li>
    </ul>
</template>

<style scoped>

ul {
    padding: 30px 0 0 0;
    width: 90vw;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
}

ul li {
  margin-right: 14px;
  margin-bottom: 10px;
  position: relative;
}

ul li img{
  /* width: 412px;
  height: 232px; */
  width: 400px;
  height: 300px;
  border-radius: 5px;
  user-select: none;
}
ul li img:hover {
  transform: translateY(-1px);
  animation: 0.5s linear;
  box-shadow: 0px 0px 5px 5px #aaa;
  transition: box-shadow 0.5s 0s cubic-bezier(0, 0.69, 0.81, 0.68);
}
ul svg {
  position: absolute;
  bottom: 6px;
  right: 0;
  font-size: 30px;
}
</style>