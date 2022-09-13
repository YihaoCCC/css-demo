<template>
    <div class="itemBox" v-for="item in routeList" @click="goPage(item.path)" :class="item.path === currentPath ? 'active' : '' ">
        <div class="icon">
            <svg t="1663034343022" class="icon" viewBox="0 0 1029 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2412" width="200" height="200">
                <path
                    d="M1001.423238 494.592q21.504 20.48 22.528 45.056t-16.384 40.96q-19.456 17.408-45.056 16.384t-40.96-14.336q-5.12-4.096-31.232-28.672t-62.464-58.88-77.824-73.728-78.336-74.24-63.488-60.416-33.792-31.744q-32.768-29.696-64.512-28.672t-62.464 28.672q-10.24 9.216-38.4 35.328t-65.024 60.928-77.824 72.704-75.776 70.656-59.904 55.808-30.208 27.136q-15.36 12.288-40.96 13.312t-44.032-15.36q-20.48-18.432-19.456-44.544t17.408-41.472q6.144-6.144 37.888-35.84t75.776-70.656 94.72-88.064 94.208-88.064 74.752-70.144 36.352-34.304q38.912-37.888 83.968-38.4t76.8 30.208q6.144 5.12 25.6 24.064t47.616 46.08 62.976 60.928 70.656 68.096 70.144 68.096 62.976 60.928 48.128 46.592zM447.439238 346.112q25.6-23.552 61.44-25.088t64.512 25.088q3.072 3.072 18.432 17.408l38.912 35.84q22.528 21.504 50.688 48.128t57.856 53.248q68.608 63.488 153.6 142.336l0 194.56q0 22.528-16.896 39.936t-45.568 18.432l-193.536 0 0-158.72q0-33.792-31.744-33.792l-195.584 0q-17.408 0-24.064 10.24t-6.656 23.552q0 6.144-0.512 31.232t-0.512 53.76l0 73.728-187.392 0q-29.696 0-47.104-13.312t-17.408-37.888l0-203.776q83.968-76.8 152.576-139.264 28.672-26.624 57.344-52.736t52.224-47.616 39.424-36.352 19.968-18.944z"
                    p-id="2413" fill="#71717a">
                </path>
            </svg>
        </div>
        <div class="routeItem">
            {{item.name}}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { routeList } from '../routerItem/routerList'
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue'
const router = useRouter()
const route = useRoute()
const currentPath = ref()
const goPage = (path: string) => {
    router.push(path)
}   
watch(() => route.fullPath, (val) => {
    if(val === '/dashbord') {
        currentPath.value = '/'
    } else {
        currentPath.value = val
    }    
},{
    immediate:true
})
</script>

<style lang="scss" scoped>
.itemBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    font-size: 14px;    
    color: #71717a;
    .icon {
        width: 32px;
        height: 32px;
        //background-color: #c026d3;
        background-color: #27272a;
        text-align: center;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        svg {
            width: 60%;
            height: 60%;
        }
    }
    .routeItem {
        width: 70%;
        text-align: start;
    }
    &.active {
        color: #fff;
        font-weight: bolder;
        transform: scale(1.1) translateX(5px);
        transition: all .3s ease-in;
        //box-shadow: 0px 10px 40px rgba(255,0,0,);
        //background-color: none;
        .icon {
            background-color: #c026d3;
            svg {
                path {
                    fill: #fff;
                }
            }
        }
    }
}
</style>