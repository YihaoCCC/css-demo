<template>
    <div>
        <div class="header">   
            
        </div>
        <div class="container">
            <div class="leftBar">
                <!-- <button @click="closeLeftBar">折叠</button> 6  -->
                <LeftBarItem></LeftBarItem>
            </div>
            <div class="rightContent">
                <slot name="layout-container"></slot>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import LeftBarItem from './LeftBarItem.vue';

     const isCloseBar = ref(false)
     const closeLeftBar = () => {
        isCloseBar.value = !isCloseBar.value
     }
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 60px;
        background-color: aquamarine;
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 16px;
        .leftBar {
            width: 13%;
            height: 93.5vh;
            background-color: bisque;
        }
        .rightContent {
            width: 86%;
            border-radius: 10px;
            background-color: #fff;
            height: 90vh;
            padding: 10px 16px;
            box-sizing: border-box;
        }
    }
</style>