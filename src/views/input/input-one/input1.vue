<template>
        <div>
            <p>tip: label背景、input背景、盒元素背景三者要保持一致</p>
            <div class="input">
                <input type="text" id="myinput" required>
                <label for="myinput">placeholder</label>
            </div>
            <YhModal :css-code="css" :htmlcode="html"></YhModal>
        </div>
</template>

<script lang="ts" setup>
import { css, html } from './code'
import { onMounted } from 'vue'
import { useCodeButtonStore } from '../../../store/index'
import YhModal from '../../../components/YhModal.vue';
 onMounted(() => {
    useCodeButtonStore().showButton()
 })
</script>

<style lang="scss" scoped>
    @import './input1.scss';
</style>