<template>
    <div class="textBackImg">
        Hello Millin UI
    </div>
</template>


<style lang="scss" scoped>
    .textBackImg {
        height: 100px;
        font-size: 120px;
        line-height: 100px;
        background: url(../../../img/风景图.jpg);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        animation: dynamic 5s infinite alternate  ease-in;
    }

    @keyframes dynamic {
        0% {
            background-position: 0%;
        }   
        100% {
            background-position: 100%;
        }
    }
</style>