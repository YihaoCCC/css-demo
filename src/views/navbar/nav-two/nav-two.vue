<template>
    <div>
        <div class="navbar-two">
            <input type="radio" name="tab" id="tab1" checked>
            <input type="radio" name="tab" id="tab2" >
            <input type="radio" name="tab" id="tab3" >
            <div class="cube">     
                <div class="item_content">
                    <h1>this is des title1</h1>
                    <p>this is some description</p>
                </div>
                <div class="item_content">
                    <h1>this is des title2</h1>
                    <p>this is some description</p>
                </div>
                <div class="item_content">
                    <h1>this is des title3</h1>
                    <p>this is some description</p>
                </div>
            </div>
            <div class="labels">
                <label class="label" for="tab1">tab1</label>
                <label class="label" for="tab2">tab2</label>
                <label class="label" for="tab3">tab3</label>
            </div>
        </div>
        <h3>dynamic button</h3>
        <div @click="active = !active" class="buttonFly" :class="active ? 'active' : ''">
            <div class="buttonItem" style="--t:0;--x:-1;--y:0">
                <el-icon><ChatDotRound /></el-icon>
            </div>
            <div class="buttonItem" style="--t:1;--x:0;--y:-1">
                <el-icon><Star /></el-icon>
            </div>
            <div class="buttonItem" style="--t:2;--x:1;--y:0">
                <el-icon><Message /></el-icon>
            </div>
            <div class="buttonItem" style="--t:3;--x:0;--y:1">
                <el-icon><House /></el-icon>
            </div>
            <div class="buttonItem" style="--t:4;--x:0;--y:0">
                <el-icon><Postcard /></el-icon>
            </div>
            <div class="buttonItem" style="--t:5;--x:-1;--y:1">
                <el-icon><Mic /></el-icon>
            </div>
            <div class="buttonItem" style="--t:6;--x:-1;--y:-1">
                <el-icon><VideoCameraFilled /></el-icon>
            </div>
            <div class="buttonItem" style="--t:7;--x:1;--y:-1">
                <el-icon><Cpu /></el-icon>
            </div>
            <div class="buttonItem" style="--t:8;--x:1;--y:1">
                <el-icon><House /></el-icon>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCodeButtonStore } from '../../../store/index'
import { onMounted, ref } from 'vue'
onMounted(() => {
    useCodeButtonStore().hiddenButton()
})

const active = ref(false)

</script>

<style lang="scss" scoped>
    @import './nav-two.scss';
</style>