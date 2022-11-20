<template>
    <div class="content">
        <div class="card" @click="chooseThis" :class="isClicked ? 'clicked': ''">
            
            <div v-if="!isClicked">
                奖
            </div>
            <div v-else >
                一等奖
            </div>
        </div>
        <div class="card" @click="chooseThis">
            奖
        </div>
        <div class="card" @click="chooseThis">
            奖
        </div>
        <div class="card" @click="chooseThis">
            奖
        </div>
        <div class="card" @click="chooseThis">
            奖
        </div>
        <div class="card" @click="chooseThis">
            奖
        </div>
        <div class="card" @click="chooseThis">
            奖
        </div>
        <div class="card" @click="chooseThis">
            奖
        </div>
        <div class="card" @click="chooseThis">
            奖
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isClicked = ref(false)
const chooseThis = () => {
    isClicked.value = true
}
</script>


<style lang="scss" scoped>
.content {
    width: 500px;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: #999;
}
.card {
    font-size: 36px;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #f8f8f8;
    transition: all .3s ease-in-out; 
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
}   
.card.clicked {
    transform: rotateY(180deg);
}
</style>
