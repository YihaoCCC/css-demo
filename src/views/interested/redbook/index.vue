<template>
    <div class="baseBox">
        <div class="model"></div>  
        <div class="item" v-for="item in dataList" @click="goCenter">
            <div class="model"></div> 
            <img :src="item.imgUrl" alt="">
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import yhHttp from '../../../yhhttp'
const dataList = ref()
const goCenter = (e:Event) => {
    console.log(e);
}
onMounted(() => {
    const yh = yhHttp.getInstance()
    yh.get('/api/b0d9464882f01ac288325bb9fb917d07/redbook/list').then((result) => {
        dataList.value = result
    }).catch((err) => {
        
    });
})
</script>
<style scoped lang="scss">
@import './index.scss';
</style>