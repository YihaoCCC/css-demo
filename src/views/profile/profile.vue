<template>
    <div class="profile">
        <div class="slider">
            <img src="../../assets/undraw_dream.svg" alt="">
            <div class="info">
                <h2>This is the  new profile index to welcome new webste</h2>
                <button @click="goUIHome">goUIHome</button>
            </div>
        </div>
        <div class="slider"></div>
        <div class="slider"></div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const goUIHome = () => {
    router.push('/UIwelcome')
}


</script>


<style lang="scss" scoped>
@import './profile.scss';
</style>