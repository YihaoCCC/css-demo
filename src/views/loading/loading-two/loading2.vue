<template>
    <section>
        <div class="loading">
            
        </div>
        <YhModal></YhModal>
        
    </section>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useCodeButtonStore } from '../../../store/index'
import YhModal from '../../../components/YhModal.vue';
 onMounted(() => {
    useCodeButtonStore().showButton()
 })
</script>
<style lang="scss" scoped>
    @import './loading2.scss';
</style>