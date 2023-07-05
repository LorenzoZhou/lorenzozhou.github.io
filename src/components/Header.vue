
<script setup>
import { onMounted, ref, watch } from 'vue'
import headerData from '../config/header'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue';

const route = useRoute()
const router = useRouter()

console.log(route.name)


const currentTab = computed({
  get: ()=> route.name,
  set: (tab)=> router.push({name: tab})
})

function toselect(tab) {
  currentTab.value = tab
}

</script>

<template>
  <header>
    <h1><a href=""><img src="../../public/bizhi.jpeg" alt="壁纸" />壁纸</a></h1>
    <nav>
      <ul class="left">
        <li
          v-for="item in headerData.left" :key="item.name"
          @click="toselect(item.name)"
          :class="{ sec: item.name === currentTab }">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.xlink"></use>
          </svg>
          <span>{{ item.text }}</span>
        </li>
      </ul>
      <ul class="right">
          <li
            v-for="item in headerData.right" :key="item.name"
            @click="toselect(item.name)"
            :class="{ sec: item.name === currentTab }">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.xlink"></use>
            </svg>
            <span>{{ item.text }}</span>
          </li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
@font-face {
  font-family: motu;
  src: url(../assets/ttf/motu.ttf);
}

/* div {
  height: 50px;
} */

header {
  background-color: rgb(245, 245, 245);
  height: 50px;
  padding: 0 80px;
  box-shadow: 0px 0px 5px 5px #aaa;
  display: flex;
  position: relative;
}

header h1 {
  font-family: motu;
  line-height: 50px;
  margin-right: 20px;
  user-select: none;
  font-size: 20px;
}
header h1 a {
  display: block;
}
header h1 img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 5px;
}


header nav {
  flex: 1;
  position: sticky;
  top: 0;
}
.left {
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
}

.icon {
  margin: 0 5px 0 15px;
}

.right {
  float: right;
  height: 100%;
  display: flex;
}

.left,
.right {
  font-size: 15px;
}

.left li,
.right li {
  height: 100%;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
}

.left li.sec,
.right li.sec {
  border-bottom: 2px solid grey;
  color: red;
}

.left li:hover,
.right li:hover {
  background-color: #dfe4ea;
}

.left li span,
.right li span {
  margin-right: 15px;
  user-select: none;
}
</style>