<template>
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
</template>

<script setup lang="ts">
import { useCodeButtonStore } from '../../../store/index'
import { onMounted } from 'vue'
onMounted(() => {
    useCodeButtonStore().hiddenButton()
})

</script>

<style lang="scss" scoped>
    @import './nav-two.scss';
</style>