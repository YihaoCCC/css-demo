<template>
    <div>
        <h1>鼠标移入卡片介绍</h1>
        <div class="content">
            <div class="imgBox type1 ">
                <img src="../../img/风景图.jpg" alt="">
                <p>世间情动，不过盛夏白瓷梅子汤，碎冰碰壁叮当响。</p>
            </div>
            <div class="imgBox type2">
                <img src="../../img/风景图.jpg" alt="">
                <p>趁还有力气的时候，一定要狠踹生活，因为生活绝不会因你胆小懦弱、什么都没干而饶了你。</p>
            </div>
            <div class="imgBox type3">
                <img src="../../img/风景图.jpg" alt="">
                <p>太阳天空照，花儿对你笑，懒虫还在睡大觉。发条短信把你叫，催你早起对镜笑，鲜牛奶，软面包，营养早餐早备好。早安！</p>
            </div>
            <div class="imgBox type4">
                <img src="../../img/风景图.jpg" alt="">
                <p>我本来打算告诉你在你不在我身边的这段时间里，我遇到的所有糟糕事，但最后我只想告诉你，我很想你。</p>
            </div>
            <div class="imgBox type5">
                <img src="../../img/风景图.jpg" alt="">
                <h1>Yihao Chen</h1>
                <h4>Programmer</h4>
                <div class="describe">
                    Luck：2022 just a web Desginer
                </div>
                <div class="KnowMore">
                    <button>了解更多</button>
                </div>    
            </div>
            <div class="imgBox">
                <img src="../../img/风景图.jpg" alt="">
                <p>人生这么短暂，就不要让一些糟糕的事情占据你这宝贵的时间啦！来到这人世间本就是一场体验，要尽量让自己尽兴一点！</p>
            </div>
            <div class="imgBox">
                <img src="../../img/风景图.jpg" alt="">
                <p>人生这么短暂，就不要让一些糟糕的事情占据你这宝贵的时间啦！来到这人世间本就是一场体验，要尽量让自己尽兴一点！</p>
            </div>
            <div class="imgBox">
                <img src="../../img/风景图.jpg" alt="">
                <p>人生这么短暂，就不要让一些糟糕的事情占据你这宝贵的时间啦！来到这人世间本就是一场体验，要尽量让自己尽兴一点！</p>
            </div>
        </div>
        <YhModal></YhModal>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useCodeButtonStore } from '../../store/index'
import YhModal from '../../components/YhModal.vue';
onMounted(() => {
    useCodeButtonStore().showButton()
})

</script>

<style lang="scss" scoped>
    @import './mouseCard.scss';
</style>
