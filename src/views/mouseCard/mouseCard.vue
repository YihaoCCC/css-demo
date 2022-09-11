<template>
    <div>
        随着鼠标进入位置展示详情
    </div>
</template>
<script lang="ts" setup>
    // 要操作的元素
const lis=document.querySelectorAll('.container li'),
      ps=document.querySelectorAll('.container li p');

// 获取移入、移出的方向
function direct(e,o){
    var w=o.offsetWidth,
        h=o.offsetHeight,
        top=o.offsetTop,
        left=o.offsetLeft,
        scrollTop=document.body.scrollTop||document.documentElement.scrollTop,
        scrollLeft=document.body.scrollLeft||document.documentElement.scrollLeft,
        offTop=top-scrollTop,
        offLeft=left-scrollLeft,
        ex=(e.pageX-scrollLeft)||e.clientX,
        ey=(e.pageY-scrollTop)||e.clientY,
        x=(ex-offLeft-w/2)*(w>h?(h/w):1),
        y=(ey-offTop-h/2)*(h>w?(w/h):1),
        angle=(Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90)+3)%4,
        directName=['上','右','下','左'];
    return directName[angle];
}

// 鼠标事件（方向，元素，鼠标进入或离开）
function mouseEvent(angle,o,d){
    var w=o.offsetWidth,
        h=o.offsetHeight;
    var p=o.querySelector('p');     //元素下的p元素
    p.style.transition='0s';        //默认无过渡效果
    if(d=='in'){  //鼠标进入
        // 判断方向
        switch(angle){
            case '上':
                if(p.offsetLeft==0&&p.offsetTop==0) break;
                p.style.left=0;
                p.style.top=-h+'px';
                setTimeout(() => {
                    p.style.left=0;
                    p.style.top=0;
                    p.style.transition='0.2s';
                }, 50);
                break;
            case '右':
                if(p.offsetLeft==0&&p.offsetTop==0) break;
                p.style.left=w+'px';
                p.style.top=0;
                setTimeout(() => {
                    p.style.left=0;
                    p.style.top=0;
                    p.style.transition='0.2s';
                }, 50);
                break;
            case '下':
                if(p.offsetLeft==0&&p.offsetTop==0) break;
                p.style.left=0;
                p.style.top=h+'px';
                setTimeout(() => {
                    p.style.left=0;
                    p.style.top=0;
                    p.style.transition='0.2s';
                }, 50);
                break;
            case '左':
                if(p.offsetLeft==0&&p.offsetTop==0) break;
                p.style.left=-w+'px';
                p.style.top=0;
                setTimeout(() => {
                    p.style.left=0;
                    p.style.top=0;
                    p.style.transition='0.2s';
                }, 50);
                break;
        }
    }else if(d=='out'){  //鼠标离开
        // 判断方向
        switch(angle){
            case '上':
                setTimeout(() => {
                    p.style.left=0;
                    p.style.top=-h+'px';
                    p.style.transition='0.2s';
                    p.style.transitionDelay='0.1s';
                }, 50);
                break;
            case '右':
                setTimeout(() => {
                    p.style.left=w+'px';
                    p.style.top=0;
                    p.style.transition='0.2s';
                    p.style.transitionDelay='0.1s';
                }, 50);
                break;
            case '下':
                setTimeout(() => {
                    p.style.left=0;
                    p.style.top=h+'px';
                    p.style.transition='0.2s';
                    p.style.transitionDelay='0.1s';
                }, 50);
                break;
            case '左':
                setTimeout(() => {
                    p.style.left=-w+'px';
                    p.style.top=0;
                    p.style.transition='0.2s';
                    p.style.transitionDelay='0.1s';
                }, 50);
                break;
        }
    }
}

lis.forEach(li=>{
    li.addEventListener('mouseenter',function(e){
        var e=e||window.event;
        var angle=direct(e,this);
        mouseEvent(angle,this,'in');
    })
    li.addEventListener('mouseleave',function(e){
        var e=e||window.event;
        var angle=direct(e,this);
        mouseEvent(angle,this,'out');
    })
})
</script>

<style lang="scss" scoped>
    @import './mouseCard.scss';
</style>
