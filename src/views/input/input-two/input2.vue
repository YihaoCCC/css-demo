<template>
    <div class="box-content">
        <div class="input-box">
            <input required>
            <label>{{'test'}}</label>
            <div class="underline"></div>
        </div>
        <YhModal></YhModal>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useCodeButtonStore } from '../../../store/index'
import YhModal from '../../../components/YhModal.vue';
 onMounted(() => {
    useCodeButtonStore().showButton()
 })
</script

<style lang="scss" scoped>
   @import './input2.scss';
</style>