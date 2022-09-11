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
            <div class="imgBox">
                <img src="../../img/风景图.jpg" alt="">
                <p>我本来打算告诉你在你不在我身边的这段时间里，我遇到的所有糟糕事，但最后我只想告诉你，我很想你。</p>
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
            <div class="imgBox">
                <img src="../../img/风景图.jpg" alt="">
                <p>人生这么短暂，就不要让一些糟糕的事情占据你这宝贵的时间啦！来到这人世间本就是一场体验，要尽量让自己尽兴一点！</p>
            </div>
            <div class="imgBox">
                <img src="../../img/风景图.jpg" alt="">
                <p>人生这么短暂，就不要让一些糟糕的事情占据你这宝贵的时间啦！来到这人世间本就是一场体验，要尽量让自己尽兴一点！</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
// import { onMounted,getCurrentInstance } from 'vue';
// const that = getCurrentInstance()

// onMounted(() => {
//         // 要操作的元素
// const lis=document.querySelectorAll('.content .imgBox'),
//       ps=document.querySelectorAll('.content .imgBox p');

// // 获取移入、移出的方向
// function direct(e:any,o:any){
//     var w=o.offsetWidth,
//         h=o.offsetHeight,
//         top=o.offsetTop,
//         left=o.offsetLeft,
//         scrollTop=document.body.scrollTop||document.documentElement.scrollTop,
//         scrollLeft=document.body.scrollLeft||document.documentElement.scrollLeft,
//         offTop=top-scrollTop,
//         offLeft=left-scrollLeft,
//         ex=(e.pageX-scrollLeft)||e.clientX,
//         ey=(e.pageY-scrollTop)||e.clientY,
//         x=(ex-offLeft-w/2)*(w>h?(h/w):1),
//         y=(ey-offTop-h/2)*(h>w?(w/h):1),
//         angle=(Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90)+3)%4,
//         directName=['上','右','下','左'];
//     return directName[angle];
// }

// // 鼠标事件（方向，元素，鼠标进入或离开）
// function mouseEvent(angle:any,o:any,d:any){
//     var w=o.offsetWidth,
//         h=o.offsetHeight;
//     var p=o.querySelector('p');     //元素下的p元素
//     p.style.transition='0s';        //默认无过渡效果
//     if(d=='in'){  //鼠标进入
//         // 判断方向
//         switch(angle){
//             case '上':
//                 if(p.offsetLeft==0&&p.offsetTop==0) break;
//                 p.style.left=0;
//                 p.style.top=-h+'px';
//                 setTimeout(() => {
//                     p.style.left=0;
//                     p.style.top=0;
//                     p.style.transition='0.2s';
//                 }, 50);
//                 break;
//             case '右':
//                 if(p.offsetLeft==0&&p.offsetTop==0) break;
//                 p.style.left=w+'px';
//                 p.style.top=0;
//                 setTimeout(() => {
//                     p.style.left=0;
//                     p.style.top=0;
//                     p.style.transition='0.2s';
//                 }, 50);
//                 break;
//             case '下':
//                 if(p.offsetLeft==0&&p.offsetTop==0) break;
//                 p.style.left=0;
//                 p.style.top=h+'px';
//                 setTimeout(() => {
//                     p.style.left=0;
//                     p.style.top=0;
//                     p.style.transition='0.2s';
//                 }, 50);
//                 break;
//             case '左':
//                 if(p.offsetLeft==0&&p.offsetTop==0) break;
//                 p.style.left=-w+'px';
//                 p.style.top=0;
//                 setTimeout(() => {
//                     p.style.left=0;
//                     p.style.top=0;
//                     p.style.transition='0.2s';
//                 }, 50);
//                 break;
//         }
//     }else if(d=='out'){  //鼠标离开
//         // 判断方向
//         switch(angle){
//             case '上':
//                 setTimeout(() => {
//                     p.style.left=0;
//                     p.style.top=-h+'px';
//                     p.style.transition='0.2s';
//                     p.style.transitionDelay='0.1s';
//                 }, 50);
//                 break;
//             case '右':
//                 setTimeout(() => {
//                     p.style.left=w+'px';
//                     p.style.top=0;
//                     p.style.transition='0.2s';
//                     p.style.transitionDelay='0.1s';
//                 }, 50);
//                 break;
//             case '下':
//                 setTimeout(() => {
//                     p.style.left=0;
//                     p.style.top=h+'px';
//                     p.style.transition='0.2s';
//                     p.style.transitionDelay='0.1s';
//                 }, 50);
//                 break;
//             case '左':
//                 setTimeout(() => {
//                     p.style.left=-w+'px';
//                     p.style.top=0;
//                     p.style.transition='0.2s';
//                     p.style.transitionDelay='0.1s';
//                 }, 50);
//                 break;
//         }
//     }
// }

//     lis.forEach(li=>{
//         li.addEventListener('mouseenter',function(e){
//             var e=e||window.event;
//             var angle=direct(e,that);
//             mouseEvent(angle,that,'in');
//         })
//         li.addEventListener('mouseleave',function(e){
//             var e=e||window.event;
//             var angle=direct(e,that);
//             mouseEvent(angle,that,'out');
//         })
//     })
// })
</script>

<style lang="scss" scoped>
    @import './mouseCard.scss';
</style>
