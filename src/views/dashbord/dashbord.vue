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
		<div class="index"><el-button type="primary" @click.prevent.stop="light">打开手电筒 🎉</el-button></div>
		<div class="index"><el-button type="primary" @click.prevent.stop="notice">获得此网站通知</el-button> ✔✨</div>
        <YhModal :css-code="css" :htmlcode="html"></YhModal>
  </div>
</template>
<script lang="ts" setup>
import YhModal from '../../components/YhModal.vue';
import { css, html } from './code'
import { useCodeButtonStore } from '../../store/index'
import { onMounted } from 'vue'
import Driver from "driver.js";
import Push from 'push.js'
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
const light = () => {
	document.querySelector('style')?.append(`canvas {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9999;
		pointer-events: none;
	}`)
	document.body.appendChild(document.createElement('canvas'))
	const cvs = document.querySelector('canvas') 
	const ctx = cvs?.getContext('2d')
	cvs!.width = document.documentElement.clientWidth 
	cvs!.height = document.documentElement.clientHeight
	const p = {
		x: 0,
		y: 0,
		r: 50
	}
	document.onmousemove = e => {
		p.x = e.clientX
		p.y = e.clientY
		render()
	}
	const render = () => {
		ctx?.beginPath()
		ctx?.clearRect(0, 0, cvs!.width, cvs!.height)
		var radial = ctx?.createRadialGradient(p.x, p.y, p.r, p.x, p.y, p.r * 3)
		radial?.addColorStop(0, 'rgba(255, 255, 255, 0.1)')
		radial?.addColorStop(1, 'rgba(0, 0, 0, 0.5)')
		if(ctx && radial) {
			ctx!.fillStyle = radial;
		}
		ctx?.fillRect(0, 0, cvs!.width, cvs!.height)
	}
}
const notice = () => {
	Push.create("欢迎访问 Million UI ！", {
		body: "来自Million UI 的通知：此网站不会窃取任何浏览器信息！请放心访问！",
		icon: '/icon.png',
		timeout: 5000,
		onClick: function () {
			window.focus();
		}
	});
}
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