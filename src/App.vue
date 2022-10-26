
<template>
  <RouterView></RouterView>
  <div class="fixedBox">
    <div class="content">
      <div class="watermark">
        <div class="main-color item">
          <span style="margin-right: 10px;">更换主题色</span>
          <input ref="colorInput" :value="defaultColor" @change="changeColor" type="color" name="color" id="color"/>
        </div>
        <div class="discription item">
          本项目除部分图标引用来自网络外，所有组件样式均为个人封装。
          上线的目的仅为了寻找更多的爱好者一起来完善这个样式库 | 2022-09
        </div>
        <div class="discription item">
          © AllCopyRight YihaoCCC
        </div>
      </div>
    </div>
    <div class="copyRight">
      <svg data-v-0b2d23d8="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="icon-feedback">
        <path data-v-0b2d23d8="" fill-rule="evenodd" clip-rule="evenodd"
          d="M1.8252 4.002C1.8252 2.80032 2.79935 1.82617 4.00102 1.82617H12.001C13.2027 1.82617 14.1768 2.80032 14.1768 4.002V9.71628C14.1768 10.918 13.2027 11.8921 12.001 11.8921H9.43308L6.92709 14.1281C6.4455 14.5578 5.68234 14.216 5.68234 13.5706V11.8921H4.00102C2.79934 11.8921 1.8252 10.918 1.8252 9.71628V4.002ZM11.2414 7.86753C11.3826 7.65526 11.3249 7.36878 11.1126 7.22764C10.9004 7.08651 10.6139 7.14417 10.4728 7.35643C9.94042 8.15705 9.03153 8.68309 7.99997 8.68309C6.96841 8.68309 6.05952 8.15705 5.52719 7.35643C5.38605 7.14417 5.09957 7.08651 4.88731 7.22764C4.67504 7.36878 4.61738 7.65526 4.75852 7.86753C5.45467 8.91452 6.64645 9.60617 7.99997 9.60617C9.35349 9.60617 10.5453 8.91452 11.2414 7.86753Z"
          fill="#fff"></path>
      </svg>
    </div>  
  </div>
  <div id="modal"></div>


</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const rootColor: any = document.querySelector(':root')
const defaultColor = ref()

const changeColor = (e: any) => {
    console.log(e.target.value);
    rootColor.style.setProperty('--main-color', e.target.value)
}


onMounted(() => {
    defaultColor.value = getComputedStyle(rootColor).getPropertyValue('--main-color')
    console.log(defaultColor.value);
})
</script>
<style>
/* 样式在global中 */
</style>

