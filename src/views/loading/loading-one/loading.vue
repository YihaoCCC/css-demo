<template>
    <div class="loading">
      <div class="box">
        <div class="item" style="--mystyle:0"></div>
        <div class="item" style="--mystyle:1"></div>
        <div class="item" style="--mystyle:2"></div>
        <div class="item" style="--mystyle:3"></div>
        <div class="item" style="--mystyle:4"></div>
        <div class="item" style="--mystyle:5"></div>
      </div>
      <!-- <div class="test">
  
      </div> -->
      <YhModal></YhModal>
    </div>
  </template>
  <script lang="ts" setup>
  import { onMounted } from 'vue'
  import { useCodeButtonStore } from '../../../store/index'
  import YhModal from '../../../components/YhModal.vue';
  onMounted(() => {
      useCodeButtonStore().showButton()
  })
</script>
  <style lang='scss' scoped>
    @import './loading.scss';
  </style>