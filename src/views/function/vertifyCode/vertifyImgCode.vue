<template>
    <div class="vertifyCode">
        <h1>滑动滑块验证</h1>
        <span>vue3-slide-verify</span>
        <br>
        <em>当imgs不传或者传空数组时，图片库默认使用第三方api提供的图片路径。</em>
        <slide-verify
            ref="block"
            slider-text="向右滑动->"
            :interval="10"
            :accuracy="10"
            :imgs="codeImg"
            @again="onAgain"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
            ></slide-verify>
        <button class="btn" @click="handleClick">在父组件可以点我刷新哦</button>
        <div>{{ msg }}</div>
        <YhModal></YhModal>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 局部注册组件，需要单独引用组件样式
// 只提供局部引用的方式，不再采用插件形式，方便按需加载，减少主包大小
import SlideVerify, { SlideVerifyInstance } from "vue3-slide-verify";
import "vue3-slide-verify/dist/style.css";
import YhModal from '../../../components/YhModal.vue';

const msg = ref("");
    const block = ref<SlideVerifyInstance>();

    const onAgain = () => {
      msg.value = "检测到非人为操作的哦！ try again";
      // 刷新
      block.value?.refresh();
    };

    const onSuccess = (times: number) => {
      msg.value = `login success, 耗时${(times / 1000).toFixed(1)}s`;
    };

    const onFail = () => {
      msg.value = "验证不通过";
    };

    const onRefresh = () => {
      msg.value = "点击了刷新小图标";
    };

    const handleClick = () => {
      // 刷新
      block.value?.refresh();
      msg.value = "";
    };
    const codeImg =ref(['./yjtp.png'])
</script>


<style scoped lang="scss">
@import './imgCode.scss';
</style>