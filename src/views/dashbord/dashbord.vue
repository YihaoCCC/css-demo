<template>
    <div class="components">
        <div class="switch">
            <input type="checkbox" name="" id="switch1">
            <label for="switch1"></label>
        </div>
        <div class="switch">
            <input type="checkbox" name="" id="switch2">
            <label for="switch2"></label>
        </div>

        <div class="segmented-control">
      
            <input type="radio" name="radio2" value="3" id="tab-1" checked/>
            <label for="tab-1" class= "segmented-control__1">
              <p>Tab 1</p></label>
            
            <input type="radio" name="radio2" value="4" id="tab-2" />
            <label for="tab-2" class= "segmented-control__2">
              <p>Tab 2</p></label>
            
            <input type="radio" name="radio2" value="5" id="tab-3" />
            <label for="tab-3" class= "segmented-control__3">
              <p>Tab 3</p></label>
            
            <div class="segmented-control__color"></div>
        </div>
        <div class="index"><el-button type="primary" @click.prevent.stop="guide">打开引导页 🤹‍♂️</el-button></div>
        <YhModal :css-code="css" :htmlcode="html"></YhModal>
  </div>
</template>
<script lang="ts" setup>
import YhModal from '../../components/YhModal.vue';
import { css, html } from './code'
import { useCodeButtonStore } from '../../store/index'
import { onMounted } from 'vue'
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";

onMounted(() => {
  useCodeButtonStore().showButton()
  // 用户登录后进入后只执行一遍
  setTimeout(() => {
    if(sessionStorage.getItem('showIndex') !== '1') {
      guide()
    } 
  },1000)
})

const guide = () => {
	const driver: Driver = new Driver({
		allowClose: false,
		doneBtnText: "结束",
		closeBtnText: "关闭",
		nextBtnText: "下一步",
		prevBtnText: "上一步",
    stageBackground: 'rgba(120, 120, 120,0.5)',
	});
	driver.defineSteps(steps);
	driver.start();
  // 用户进入后只执行一遍
  sessionStorage.setItem('showIndex', '1')
};

const steps = [
	{
		element: "#step1",
		popover: {
			title: "Millin UI",
			description: "点击这里可以回到欢迎界面",
			position: "right"
		}
	},
	{
		element: "#step2",
		popover: {
			title: "侧边导航",
			description: "这里可以切换不同界面",
			position: "right"
		}
	},
	{
		element: "#step3",
		popover: {
			title: "主题切换",
			description: "这里提供了黑白两种主题模式",
			position: "left"
		}
	},
	{
		element: "#step4",
		popover: {
			title: "链接其他平台",
			description: "语雀笔记与项目github地址",
			position: "left"
		}
	},
	{
		element: "#step5",
		popover: {
			title: "欢迎加入",
			description: "这里可以切换主题颜色",
			position: "left"
		}
	}
];
</script>
<style lang="scss" scoped>
    @import './dashbord.scss';
</style>