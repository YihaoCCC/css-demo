import { App, VNode } from "vue"

const number = {
    mounted(el: HTMLElement, binding: any, vnode: VNode) {
        console.log(binding.value);
        // 每一次更新也会执行created中的代码，所以两者不能执行同一套逻辑
        if (binding.value) {
            let finalNum = binding.value.number || binding.value;
            let rate = 60;
            let time = binding.value.time || 800;

            let step = finalNum / (time / rate);
            let count: any = 0;
            let timer: any = setInterval(() => {
                count += step;

                el.innerText = count.toFixed(0);
                if (count > finalNum) {
                    count = finalNum;
                    el.innerText = count;
                    clearInterval(timer);
                    timer = null;
                }
            }, rate)
        }
    },
    updated(el: HTMLElement, binding: any, vnode: VNode, prevVnode: VNode) {
        if (JSON.stringify(binding.value) === JSON.stringify(binding.oldValue)) return
        let finalNum = binding.value.number || binding.value;
        let rate = 60;
        let time = binding.value.time || 800;

        let step = finalNum / (time / rate);
        let count: any = 0;
        let timer: any = setInterval(() => {
            count += step;
            el.innerText = count.toFixed(0);
            if (count > finalNum) {
                count = finalNum;
                el.innerText = count;
                clearInterval(timer);
                timer = null;
            }
        }, rate)
    },
}

const DISTANCE = 200
const ANIMATETIME = 1000
const animationMap = new WeakMap()

let animateParent:any = ''
const ob = new IntersectionObserver((entries) => {
    console.log(entries);
    for(let item of entries) {
        if(item.isIntersecting) {
            const animation = animationMap.get(item.target)
            animation.play()
            ob.unobserve(item.target)
        }
    }
})

// 只能实现视口的动画，需要增加一个坐标dom做定位
function isBelowViewport (el:HTMLElement) {
    const rect = el.getBoundingClientRect()
    return rect.top > window.innerHeight
}

function isBelowViewDom (el:HTMLElement) {
    const rect = el.getBoundingClientRect()
}

const sliderParent = {
    mounted(el:HTMLElement) {
        animateParent = el
        console.log(animateParent);
    },
}



const slide = {
    mounted(el:HTMLElement, binding: any) {
        // 在视口之下 不需要进行创建动画
        if(!isBelowViewport(el)) return
        console.log('播放了动画');
        const animation = el.animate([
            {
                transform: `translateX(${DISTANCE}px)`,
                opacity: 0.3
            },
            {
                transform: `translateY(0)`,
                opacity: 1
            }
        ], {
            duration: binding.value || ANIMATETIME,
            easing: 'ease-in-out'
        })
        animation.pause()
        animationMap.set(el, animation)
        ob.observe(el)
    },
    unmounted(el: HTMLElement) {
        ob.unobserve(el) 
    },
}

const arr: any = {
    'cyh-number': number,
    'cyh-silder-parent': sliderParent,
    'cyh-silder-in': slide
}

const myDirectives = (app: App) => {
    for (let i in arr) {
        app.directive(i, arr[i])
    }
}


export default myDirectives