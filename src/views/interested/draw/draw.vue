<template>
    <div>
        <p>剩余抽奖次数 <em>{{ num }}</em> 次</p>
        <button v-if="num === 0" @click="refresh">充值奖池，再来一次</button>
        <div class="content">
            <div class="card noClick">
                <span>奖</span>
                <div class="back"></div>
            </div>
            <div class="card noClick">
                <span>奖</span>
                <div class="back"></div>
            </div>
            <div class="card noClick">
                <span>奖</span>
                <div class="back"></div>
            </div>
            <div class="card noClick">
                <span>奖</span>
                <div class="back"></div>
            </div>
            <div class="card noClick">
                <span>奖</span>
                <div class="back"></div>
            </div>
            <div class="card noClick">
                <span>奖</span>
                <div class="back"></div>
            </div>
            <div class="card noClick">
                <span>奖</span>
                <div class="back"></div>
            </div>
            <div class="card noClick">
                <span>奖</span>
                <div class="back"></div>
            </div>
            <div class="card noClick">
                <span>奖</span>
                <div class="back"></div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const num = ref(3)
const isClickArr = ref()
const notArr = ref()

const router = useRouter()

function clickFunction() {
    if (num.value === 1) {
        this.classList.remove('noClick')
        this.classList.add('clicked')
        console.log(this.querySelectorAll('.back'))
        this.querySelectorAll('.back')[0].innerHTML = isClickArr.value.pop().name

        const cardsDom = document.querySelectorAll('.noClick')

        setTimeout(() => {
            cardsDom.forEach(item => {
                item.querySelectorAll('.back')[0].innerHTML = notArr.value.pop().name
                item.classList.add('alwaysNoClick')
            })
        }, 2000);
    } else {
        this.classList.remove('noClick')
        this.classList.add('clicked')
        console.log(this.querySelectorAll('.back'))
        this.querySelectorAll('.back')[0].innerHTML = isClickArr.value.pop().name
    }
    num.value--
}

onMounted(() => {
    document.querySelectorAll('.card').forEach((item) => {
        item.addEventListener('click', clickFunction)
    })
    const arr = [
        { name: '谢谢惠顾', is: true },
        { name: '10元购物券', is: true },
        { name: '冲100送100', is: true },
        { name: '10w现金', },
        { name: '一套房子', },
        { name: '100w现金', },
        { name: '一栋别墅', },
        { name: 'BBA随心购', },
        { name: 'RTX4090满血显卡', },
    ].sort(() => 0.5 - Math.random())
    isClickArr.value = arr.filter(item => item.is)
    notArr.value = arr.filter(item => !item.is)
})


const refresh = () => {
    router.push('/home/intersting/draw')
}
</script>


<style lang="scss" scoped>
@import './draw.scss';
</style>
