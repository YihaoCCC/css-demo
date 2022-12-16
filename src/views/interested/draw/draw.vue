<template>
    <div class="content">
        <div class="card" @click="chooseThis" :class="isClicked ? 'clicked': ''">            
            <span>奖</span>
            <div class="back">
                一等奖
            </div>         
        </div>
        <div class="card" @click="chooseThis" :class="isClicked ? 'clicked': ''">            
            <span>奖</span>
            <div class="back">
                等奖
            </div>         
        </div>
        <div class="card" @click="chooseThis" :class="isClicked ? 'clicked': ''">            
            <span>奖</span>
            <div class="back">
                等奖
            </div>         
        </div>
        <div class="card" @click="chooseThis" :class="isClicked ? 'clicked': ''">            
            <span>奖</span>
            <div class="back">
                等奖
            </div>         
        </div>
        <div class="card" @click="chooseThis" :class="isClicked ? 'clicked': ''">            
            <span>奖</span>
            <div class="back">
                等奖
            </div>         
        </div>
        <div class="card" @click="chooseThis" :class="isClicked ? 'clicked': ''">            
            <span>奖</span>
            <div class="back">
                等奖
            </div>         
        </div>
        <div class="card" @click="chooseThis" :class="isClicked ? 'clicked': ''">            
            <span>奖</span>
            <div class="back">
                等奖
            </div>         
        </div>
        <div class="card" @click="chooseThis" :class="isClicked ? 'clicked': ''">            
            <span>奖</span>
            <div class="back">
                等奖
            </div>         
        </div>
        <div class="card" @click="chooseThis" :class="isClicked ? 'clicked': ''">            
            <span>奖</span>
            <div class="back">
                等奖
            </div>         
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
@import './draw.scss';
</style>
