<template>
    <div class="directive">   
        <div class="card">
            <h3>v-cyh-number</h3>
            <span v-cyh-number = "123"></span>
            |||
            <span v-cyh-number = "number">{{ number || '---' }}</span>
        </div>
        <div class="card">
            <h3>v-cyh-silde-in</h3>
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
        @include baseFlex;
    }
}
</style>