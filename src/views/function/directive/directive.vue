<template>
    <div class="directive">   
        <div class="card">
            <h3>v-cyh-number</h3>
            <div class="detail">
                <span v-cyh-number = "123"></span>
                |||
                <span v-cyh-number = "number">{{ number || '---' }}</span>
            </div>
        </div>
        <div class="card">
            <h3>v-cyh-silde-in</h3>
            <div class="detail" v-cyh-silder-parent>
                <div class="slider-in" v-for="item in 20" v-cyh-silder-in> {{ item }}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"> 
import { ref, onMounted } from 'vue'
const number = ref(0)

onMounted(() => {
    setTimeout(() => {
        number.value = 300
    },2000)
})



</script>

<style lang="scss" scoped>
@import '../../../plugins/mixin.scss';
.directive {
    @include  baseFlex;
    width: 100%;
    height: 100%;
    .card {
        width: 50%;
        height: 100%;
        @include baseFlex;
        flex-direction: column;
        justify-content: center;
        .detail {
            width: 100%;
            height: 60%;
            overflow: auto;
            text-align: center;
        }
    }
}
.slider-in {
    width: 260px;
    height: 150px;
    background-color: var(--main-color);
    border-radius: 10px;
    margin: 20px  auto;
}
</style>