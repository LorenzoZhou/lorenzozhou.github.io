

<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';

const query = ref('')

function queryPic() {
    console.log(query.value)
}

</script>
<template>
    <Header />
    <div class="searchbox">
        <div class="search">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
            <input @focus="query = ''" v-model="query" type="text" placeholder="请输入标签进行搜索" />
            <span @click="queryPic">搜索</span>
        </div>
    </div>
</template>
<style>
.searchbox {
    margin: 20px auto;
}

.searchbox p {
    width: 800px;
    margin: 100px auto 0;
    font-size: 18px;
}

.searchbox .search {
    width: 800px;
    height: 50px;
    margin: 0 auto;
    background-color: white;
    border-radius: 7px;
    display: flex;
    align-items: center;
}

.searchbox .search svg {
    font-size: 30px;
    margin: 0 10px;
}

.searchbox .search input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
}

.searchbox .search span {
    width: 125px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #70a1ff;
    border-radius: 0 7px 7px 0;
    color: white;
    user-select: none;
}

.searchbox .search span:hover {
    background-color: #1e90ff;
}
</style>