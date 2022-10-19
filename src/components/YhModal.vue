<template>
   
        <div class="modal" v-if="show">
            <div class="modalContent">

            </div>
        </div>
    
</template>

<script setup lang="ts">
import { getCurrentInstance,ref } from 'vue'

const instance = getCurrentInstance()
const show = ref(instance!.appContext.config.globalProperties.$showModal)

</script>


<style lang="scss">
.modal {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #666666, $alpha: 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    .modalContent {
        width: 30%;
        height: 50%;
        background-color: var(--theme-rightContent-color); 
    } 
}
</style>