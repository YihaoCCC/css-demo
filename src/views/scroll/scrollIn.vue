<template>
    <div class="scroll-in">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>

    </div>
</template>
<script setup>


</script>

<style lang="scss" scoped>
@function random-color($seed) {
    $hue: ($seed *137.5) %360; // 使用黄金角生成色调
    $saturation: 50%; // 固定饱和度
    $lightness: 50%; // 固定亮度
    @return hsl($hue, $saturation, $lightness);
}
@function random-wight($seed) {
    $base-wight: 100px; // 基础宽度
    $wight-varation: ($seed *77) % 600px; // 使用一个数乘以种子并生成宽度变化
    @return $base-wight + $wight-varation;
}
@keyframes scroll-in {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
.scroll-in {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: scroll;
    height: 100%;
    padding: 200px 0; 
    box-sizing: border-box;
    .item {
        animation-delay: 1s;
        animation: scroll-in .3s linear;
        animation-timeline: view();
        animation-range: entry 0 cover 40%;
        @for $i from 1 through 40 {
            &:nth-child(#{$i}) {
                width: random-wight($i);
                background-color: random-color($i);
                height: 200px;
                margin: 20px;
                transition: all 0.5s ease;
            }
        }
    }
}


</style>