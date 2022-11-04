<template>
    <div class="introduction">
        <div class="card">
            <div class="backIntrdution">
                <h1>pepsi-blue</h1>
                <p>some intrdution fro different pepsi,some intrdution fro different pepsi
                    some intrdution fro different pepsisome intrdution fro different pepsisome         
                </p>
                <button>Buy Now</button>
            </div>  
            <img src="./img/pepsi-blue.png" alt="">

        </div>
        <div class="card">
            <div class="backIntrdution">
                <h1>pepsi-black</h1>
                <p>some intrdution fro different pepsi,some intrdution fro different pepsi
                    some intrdution fro different pepsisome intrdution fro different pepsisome       
                </p>
                <button>Buy Now</button>
            </div>
            <img src="./img/pepsi-black.png" alt="">
        </div>
        <!-- <div class="card">
            <div class="backIntrdution">
                <h1>pepsi-weight</h1>
                <p>some intrdution fro different pepsi,some intrdution fro different pepsi
                    some intrdution fro different pepsisome intrdution fro different pepsisome       
                </p>
                <button>Buy Now</button>
            </div>
            <img src="./img/pepsi-weight.png" alt="">
        </div> -->
        <yh-modal></yh-modal>
    </div>
</template>
<script lang="ts" setup>
import YhModal from '../../../components/YhModal.vue';
</script>


<style lang="scss" scoped>
    @import './introdution.scss';
</style>