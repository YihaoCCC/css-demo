<template>
    <div class="door">
        <div class="fixContent">
            <div class="welcome">
                <span style="--mystyle:1">W</span>
                <span style="--mystyle:2">E</span>
                <span style="--mystyle:3">L</span>
                <span style="--mystyle:4">C</span>
                <span style="--mystyle:5">O</span>
                <span style="--mystyle:6">M</span>
                <span style="--mystyle:7">E</span>
            </div>
            <div class="info">
                欢迎来到Css知识星球【嗅山海，激浪苍穹，功成至无边】
            </div>
            <div class="footer" @click="addClass">
                <div class="enter" >
                    enter
                </div>
                <div class="arrow arrow-1"></div>

                <div class="arrow arrow-2" ></div>
                <div class="arrow arrow-3" ></div>
            </div>
        </div>
        <div class="secondFloor" :class="showSecondFloor ?'show' : '' ">
            <div>
                <button class="my-fly-button" @click="goHome">
                    <div class="svg-wrapper-1">
                      <div class="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                      </div>
                    </div>
                    <span>Go Home</span>
                  </button>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts" setup>
    import { useRouter } from "vue-router";
    import { ref } from "vue";
    const router = useRouter()
    
    const showSecondFloor = ref(false)

    const goHome = () => {
        router.push('/home')
    }

    const addClass = () => {
        showSecondFloor.value = true
    }
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>