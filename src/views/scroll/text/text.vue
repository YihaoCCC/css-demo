<template>
    <div class="scroll_text">
        <div class="content">
            <div class="left_content" ref="leftContent">
                <h1 v-for="i in years" :data-text=i :ref="getTextDom">{{ i }}</h1>
            </div>
            <div class="right_content">
                <div class="example" data-text="example">
                    example
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const years = ref([
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
])
const textDom = ref<HTMLElement[]>([])
const leftContent = ref<HTMLElement>()

const getTextDom = (el:any) => {
    if(el) {
        textDom.value.push(el)
    }
}

const reveal = () => {
    if(textDom.value.length) {
        for(let item of textDom.value ) {
            let topdistance = item.getBoundingClientRect().top
            let canvisible = 400
            if(topdistance < window.innerHeight - canvisible) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        }   
    }
}
onMounted(() => {
    leftContent.value && leftContent.value.addEventListener('scroll', reveal)
})


</script>

<style lang="scss" scoped>
@import './text.scss';
</style>