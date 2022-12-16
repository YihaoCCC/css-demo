<template>
    <div class="newYear">
        <div class="snow" v-for="item in 500" :key="item"></div>
        <input type="text" v-model="name">
        <button @click="test">test</button>
        <div class="wordBox" v-if="showBox">
            {{text}}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getWord } from './newyear'
const name = ref('')
const showBox = ref(false)
const text = ref('')
const test = () => {
    getWord(name.value).then((res:any) => {
        text.value = res.word
        showBox.value = true
    })
}
</script>

<style lang="scss" scoped>
@import './2023.scss';

</style>