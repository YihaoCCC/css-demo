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
                    <button v-if="showInfo === 0" class="learn-more" @click="goUIHome">
                        <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Go UIHome</span>
                    </button>
                    <div v-if="showInfo === 1" class="language">
                        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=YihaoCCC&show_icons=true&count_private=true&layout=compact&hide_border=true&langs_count=10&title_color=dd6687" alt="">
                        <a class="cta" target="_blank" href="https://github.com/YihaoCCC">
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                            <span>Go My Git</span>
                           
                            <svg t="1663491437959" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            p-id="2379" width="32" height="32" >
                                <path
                                    d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48a491.296 491.296 0 0 1 128.16-17.248c43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576C877.472 942.624 1024 750.784 1024 524.64c0-282.784-229.248-512-512-512z"
                                    p-id="2380"></path>
                            </svg>
                           
                        </a>
                    </div>
                    <div v-if="showInfo === 2" class="card">
                        <div class="image">
                            <img src="../../assets/WechatApp.jpg" alt="">
                        </div>
                        <div class="info">
                            <div>
                                <p class="name">
                                   《 一图 》
                                </p>
                                <p class="function">
                                    Front-end dev 
                                </p>
                            </div>
                            <div class="stats">
                                <p class="flex flex-col">
                                    Articles
                                    <span class="state-value">
                                        34
                                    </span>
                                </p>
                                <p class="flex">
                                    Followers
                                    <span class="state-value">
                                        455
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
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
            text.value = 'Welcome To My WeChat Mini programs'
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