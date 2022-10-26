<template>
    <div class="iphoneContent">
        <button @click="click">
                点击此处模拟触发灵动岛动画
            </button>
        <div class="iphone14">
            <div class="dynamic" ref="main">
                <div class="children" ref="child"></div>
            </div>            
            
        </div>
        <YhModal></YhModal>
    </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted} from 'vue';
    import { useCodeButtonStore } from '../../../store/index'
    import YhModal from '../../../components/YhModal.vue';
    onMounted(() => {
        useCodeButtonStore().showButton()
    })
    const child = ref(null)
    const main = ref(null)
    let num:number = 1
    const click = () => {
        const domElement:HTMLElement = child.value as any
        const mainElement:HTMLElement = main.value as any
        if(num === 1) {  
            domElement.classList.add('change1')
        } else if(num === 2) {
            domElement.classList.add('reverse')
            mainElement.classList.add('change2')
        } else if(num === 3) {
            mainElement.classList.add('change3')
        } else if(num === 4) {
            mainElement.classList.add('change4')
        } else {
            domElement.setAttribute('class', 'children')
            mainElement.setAttribute('class', 'dynamic')
            num = 0
        }
        num = num +1
    }
</script>
<style lang="scss" scoped> 
    @import './iphone14.scss';
</style>