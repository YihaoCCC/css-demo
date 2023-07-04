<template>
    <div class="directive">   
        <div class="card">
            <div class="cyh-directive">
                <h3>v-cyh-number</h3>
                <div class="detail">
                    <span v-cyh-number = "123"></span>
                    |||
                    <span v-cyh-number = "number">{{ number || '---' }}</span>
                </div>
            </div>
            <div class="cyh-directive">
                <button @click="(e:Event) => warterMark(e)">关闭水印</button>
            </div>
        </div>
        <div class="card">
            <h3>v-cyh-silde-in</h3>
            <div class="detail" v-cyh-silder>
                <div class="slider-in" v-for="item in 20"> {{ item }}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"> 
import { ref, onMounted, nextTick, onUnmounted, onDeactivated } from 'vue'
import watermark from '../../../plugins/watermark'
const number = ref(0)
const openWarterMark = ref(true)
onMounted(() => {
    nextTick(() => {
        watermark.set('cyh-default-watermark')
    })
    setTimeout(() => {
        number.value = 300
        watermark.set('cyh-dynamic-watermark')
    },2000)
}),
onUnmounted(() => {
    watermark.del()
})

onDeactivated(() => {
    watermark.del()
})

const warterMark = (e:Event) => {
    openWarterMark.value ? watermark.set('cyh-dynamic-watermark') : watermark.del()
    openWarterMark.value = !openWarterMark.value
    openWarterMark.value ?  e.target.innerText = '打开水印' :  e.target.innerText = '关闭水印'
   
}


</script>

<style lang="scss" scoped>
@import '../../../plugins/mixin.scss';
.directive {
    @include  baseFlex;
    width: 100%;
    height: 100%;
    .card {
        width: 50%;
        height: 100%;
        @include baseFlex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        .detail {
            width: 100%;
            height: 60%;
            overflow: auto;
            text-align: center;
        }
        .cyh-directive {
            height: 200px;
        }
    }
}
.slider-in {
    width: 260px;
    height: 150px;
    background-color: var(--main-color);
    border-radius: 10px;
    margin: 20px  auto;
}
</style>