<template>
  <div class="layout">

    <div class="leftBar">
      <div class="leftHeader" @click="goDoor">
        <div class="logo">
          C
        </div>
        <span>CYH CMS</span>
      </div>
      <LeftBarItem></LeftBarItem>
    </div>
    <div class="container">

      <Header></Header>

      <div style="padding: 0 16px 10px 16px;box-sizing:border-box;">
        <div class="rightContent">
          <slot name="layout-container"></slot>
        </div>
      </div>

    </div>

  </div>

</template>

<script lang="ts" setup>
import LeftBarItem from './LeftBarItem.vue';
import Header from './Header.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const goDoor = () => {
  router.push('/')
}

</script>

<style lang="scss" scoped>
.layout {
  display: flex;
}

.leftBar {
  width: 13%;
  height: 100vh;
  color: var(--theme-font-color);
  padding: 15px 0px 0 10px;
  box-sizing: border-box;
  background-color: transparent;

  .leftHeader {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 24px;
    font-weight: bolder;
    margin-bottom: 30px;
    color: var(--theme-font-deeper);
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
}
</style>