<template>
    <div class="piano">
        <div class="pianoItem">
            <div class="title">
                <h1>Home</h1>
            </div>
            <div class="subscribe">
                <p>
                    Click here to navigate to the home section of the website
                </p>
            </div>
        </div>
        <div class="pianoItem">
            <div class="title">
                <h1>About</h1>
            </div>
            <div class="subscribe">
                <p>
                    Click here to navigate to the About section of the website
                </p>
            </div>
        </div>
        <div class="pianoItem">
            <div class="title">
                <h1>Work</h1>
            </div>
            <div class="subscribe">
                <p>
                    Listing relevant snippets of work: <br>

                        ·First piece of work <br>
                        ·Second piece of work <br>
                        ·Third piece of work <br>
                </p>
            </div>
        </div>
        <div class="pianoItem">
            <div class="title">
                <h1>Home</h1>
            </div>
            <div class="subscribe">
                <p>
                    Click here to navigate to the home section of the website
                </p>
            </div>
        </div>
        <YhModal></YhModal>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useCodeButtonStore } from '../../store/index'
import YhModal from '../../components/YhModal.vue';
 onMounted(() => {
    useCodeButtonStore().showButton()
 })
</script>

<style scoped lang="scss">
@import './piano.scss';
</style>