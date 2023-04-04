<template>
    <div class="profile" >
        <div class="backGround" ref="profile">
            <div class="slider"></div>
            <div class="slider"></div>
            <div class="slider"></div>
        </div>
        <div class="content">
            <div class="imgBox" :class="change ? 'showChange' : ''">
                <img :src="imgUrl" alt=""> 
            </div>
            <div class="info" >
                <h2 :class="change ? 'showChange' : ''">{{ text }}</h2>
                <div class="differentNav" :class="change ? 'showChange' : ''">
                    <button v-if="showInfo === 0" @click="goUIHome">goUIHome</button>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script setup >
import { useRouter } from 'vue-router';
import { ref, onMounted, computed, watch} from 'vue';
const profile = ref(null)
const router = useRouter()
const goUIHome = () => {
    router.push('/UIwelcome')
}
const floor = ref(0)
const showInfo = ref(0)
const change = ref(false)
const text = ref('')
const imgUrl = ref('')
const handleImgSrc = async(num)=>{
    let m 
    if(num === 0) {
        m = await import('../../assets/webset.svg');
    } else if (num === 1) {
        m = await import('../../assets/digital.svg');
    } else {
        m = await import('../../assets/app.svg');
    }
    imgUrl.value = m.default;
    console.log(123)
};
watch(floor, () => {
    change.value = true
    setTimeout(() => {
        change.value = false
        if(floor.value === 0) {
            text.value = 'This is the  new profile index '
        } else if (floor.value === 1) {
            text.value = 'Welcome To My Digital Garden'
        } else {
            text.value = 'Welcome To My We Chat Mini programs'
        }
        handleImgSrc(floor.value)
    }, 400);
}, {immediate:true})
onMounted(() => {
    //节流 
    let endTime = new Date();
    document.addEventListener('mousewheel', (e) => {
        if (new Date() - endTime < 600) {
            console.log("滑动的太频繁了，多余的已被忽略");
            return;
        }
        if (e.wheelDeltaY < 0) {
            if (floor.value === 2) return;
            floor.value++;
        } else {
            if (floor.value === 0) return;
            floor.value--;
        }
        // v-if会影响消失动画执行，不能用floor控制，所以新增变量控制info中具体显示内容
        setTimeout(() => {
            showInfo.value = floor.value
            
        }, 400);
        
        profile.value.style.transform = `translateY(-${floor.value*100}vh)`;
        endTime = new Date();
    })
})

</script>


<style lang="scss" scoped>
@import './profile.scss';
</style>