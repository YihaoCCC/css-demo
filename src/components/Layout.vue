<template>
  <div class="layout">

    <div class="leftBar">
      <div class="leftHeader" @click="goDoor" id="step1">
        <div class="logo">
          C
        </div>
        <span>Million UI</span>
      </div>
      <LeftBarItem></LeftBarItem>
    </div>
    <div class="container">

      <Header></Header>

      <div style="padding: 0 16px 10px 16px;box-sizing:border-box;">
        <div class="rightContent">
          <slot name="layout-container"></slot>
          <button class="showCode" v-if="useCodeButton.showCodeButton"  @click="showModal">
            <svg t="1666181730854" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="2757" width="26" height="26">
              <path
                d="M541.141333 268.864l61.717334 16.938667-132.394667 482.474666-61.717333-16.938666 132.394666-482.474667zM329.002667 298.666667l44.885333 45.610666-175.36 172.586667 175.04 167.573333-44.266667 46.229334L106.666667 517.504 329.002667 298.666667z m355.882666 0l222.336 218.837333L684.586667 730.666667l-44.266667-46.229334 175.018667-167.573333L640 344.277333 684.885333 298.666667z"
                p-id="2758" >
              </path>
            </svg>
            code</button>
        </div>
      </div>

    </div>

  </div>

</template>

<script lang="ts" setup>
import LeftBarItem from './LeftBarItem.vue';
import Header from './Header.vue';
import { useRouter } from 'vue-router';
// import { getCurrentInstance } from 'vue'
// const instance = getCurrentInstance()
// let ishow = instance?.appContext.config.globalProperties.$showModal
import { useModalStore, useCodeButtonStore }  from '../store/index'
const router = useRouter()

const useModal = useModalStore()
const useCodeButton = useCodeButtonStore()
const goDoor = () => {
  router.push('/')
}
const showModal = () => {
  useModal.openModal()
} 
// const showModal = () => {
//   instance!.appContext.config.globalProperties.$showModal = !instance!.appContext.config.globalProperties.$showModal
//   console.log(instance?.appContext.config.globalProperties.$showModal);
  
// }

</script>

<style lang="scss" scoped>
.layout {
  display: flex;
}

.leftBar {
  width: 214px;
  height: 100vh;
  color: var(--theme-font-color);
  padding: 0px 0px 0 10px;
  box-sizing: border-box;
  background-color: transparent;
  overflow: auto;

  .leftHeader {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 24px;
    font-weight: bolder;
    margin-bottom: 30px;
    color: var(--theme-font-deeper);
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--theme-rightContent-color);
    z-index: 100;
    padding: 15px 0 5px 0;
  }

  .logo {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    margin-right: 18px;
    background: linear-gradient(to left, #7c3aed, var(--main-color));
    text-align: center;

  }

}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;

  .rightContent {
    width: 100%;
    height: 91vh;
    border-radius: 10px;
    padding-right: 20px;
    padding: 10px 16px;
    box-sizing: border-box;
    color: var(--theme-font-deeper);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    background-color: var(--theme-rightContent-color);
    box-shadow: var(--theme-rightContent-boxShadow);
    border: var(--theme-rightContent-border);
    transition: all .3s ease-in-out;
    overflow: hidden;
  }

  .showCode {
    position: absolute;
    top: 30px;
    opacity: 0;
    right: -50px;
    transition: right,opacity, .8s ease-in-out;
    font-weight: 600;
    font-size: 16px;
    padding: 8px 15px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: var(--theme-icon-color);
    color: inherit;
    border: none;
    box-shadow: 0 0 30px var(--theme-font-deeper);
    backdrop-filter: blur(5px);
    svg {
      path {
        fill: var(--theme-font-deeper);
      }
    }
    &:hover {
      background-color: var(--main-color);
    }
  }

  &:hover {
    .showCode {
      right: 30px;
      opacity: 1;      
    }
  }
}
</style>