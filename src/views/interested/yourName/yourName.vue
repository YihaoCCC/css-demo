<template>
    <div class="nameCanvas">
        <canvas id="writename" width="800" height="600"></canvas>
        <div>
            tips:当canva的位置在dom中有变动时候，鼠标会有偏移，因为e.pageX是从document顶点出发的
        </div>
        <YhModal></YhModal>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import YhModal from '../../../components/YhModal.vue';
    
    onMounted(() => {
        const cvs:HTMLCanvasElement = document.getElementById('writename') as HTMLCanvasElement
        const ctx = cvs.getContext('2d')
        let isDrawing = false
        cvs.addEventListener('mousedown', (e) => {
            isDrawing = true
            ctx?.moveTo(e.pageX-375, e.pageY-139)
        })
        cvs.addEventListener('mouseup', e => {
            isDrawing = false
        })
        cvs.addEventListener('mousemove', e => {
            if(isDrawing) {
                ctx?.lineTo(e.pageX-375, e.pageY-139)
                ctx?.stroke()
            }
        })

    })
</script>


<style lang="scss" scoped>
    @import './yourName.scss';
</style>