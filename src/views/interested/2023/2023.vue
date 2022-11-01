<template>
    <div class="newYear">
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
.wordBox {
    overflow: hidden;
    height: 1.3em;
    animation: wordPrintln 2s steps(50), blink-caret .75s step-end infinite;
    word-break: break-all;
    border-right: 1px solid transparent;
}

@keyframes wordPrintln {
    0% {
        width: 10px;
    }
    100% {
        width: 100%;
    }
}
/* 光标 */
@keyframes blink-caret {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: currentColor;
    }
}
</style>