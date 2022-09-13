<template>
    <div class="layout">

        <div class="leftBar">
           <div class="leftHeader">
                <div class="logo">
                    C   
                </div>
                <span>CYH CMS</span>
           </div>
            <LeftBarItem></LeftBarItem>
        </div>
        <div class="container">
            <div class="header">
                <div class="avatar">
                    <img src="https://joeschmoe.io/api/v1/jon" alt="">
                </div>
            </div>
            <div style="padding: 10px 16px;box-sizing:border-box;">
                <div class="rightContent">
                    <slot name="layout-container"></slot>
                </div>
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
.layout {
    display: flex;
}

.leftBar {
    width: 13%;
    height: 100vh;
    color: #fff;
    padding: 15px 0px 0 10px;       
    box-sizing: border-box;
    background-color: transparent;
    .leftHeader {
      display: flex;
      justify-content:flex-start;
      align-items:center;
      font-size:24px;
      font-weight: bolder;
      margin-bottom: 30px;
    }
    .logo {
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 50%;
        margin-right: 18px;
        background: linear-gradient(to left, #7c3aed,#c026d3 );
        text-align: center;
        
    }

}

.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    .header {
        width: 100%;
        height: 60px;
        background-color: transparent;
        z-index: 100;
        padding: 10px 20px;
        box-sizing: border-box;
        .avatar {
            float: right;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .rightContent {
        width: 100%;
        height: 91vh;
        border-radius: 10px;   
        padding-right: 20px;
        padding: 10px 16px;
        box-sizing: border-box;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        border-radius: 10px;
        backdrop-filter: blur(5px);
        background-color: rgba(71,71,71, 0.063);
        box-shadow: rgba(150, 150, 150, 0.3) 0px 0px 30px;
        border: 2px rgba(255,255,255,0.4) solid;
        overflow: hidden;
    }
}
</style>