<script setup lang="ts">
import { ref, provide } from 'vue';
import Layout from '../../components/Layout.vue'
const fresh = ref(true)
const reload = () => {
  console.log('asdfasdfa')
  fresh.value = false
  setTimeout( ()=> {
    fresh.value = true
  },0)
}
provide('reload', reload)
</script>
    
<template>
  <Layout>
    <!-- 一定要加mode：这个决定了动画执行的先后顺序 -->
    <template v-slot:layout-container>
      <router-view v-slot="props" >
        <transition :appear="true" mode="out-in" enter-active-class="animate__animated animate__slideInDown"
          leave-active-class="animate__animated animate__zoomOut">
          <component v-if="fresh" :is="props.Component"></component>
        </transition>
      </router-view>
    </template>
  </Layout>
  <div class="openDoor">

  </div>
</template>
    
<style scoped>
.openDoor {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: var(--theme-background);
  animation: close 1s ease-in-out forwards;
  animation-delay: .3s;
}

@keyframes close {
  0% {
    opacity: 1;
    background-color: var(--theme-background);
    clip-path: circle(100%);
  }

  100% {
    opacity: 0;
    background-color: rgb(183, 183, 183);
    clip-path: circle(0% at 50% 50%);
  }
}
</style>
    