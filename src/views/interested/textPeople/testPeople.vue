<template>
    <div class="testContent">
        <p>
            {{getname}}
        </p> 
    </div>
</template>
<script setup lang="ts">

import { ref,computed } from 'vue';
const name = ref('陈一奕')
const getname = computed(() => {
    let newName=''
    for(let i = 0; i< 4000; i++) {
        newName = name.value + '' + newName      
    }
    
    return newName
})
</script>

<style lang="scss" scoped>
@import './testpeople.scss';
</style>