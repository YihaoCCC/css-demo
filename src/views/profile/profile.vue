<template>
    <div class="profile">
        this is the  new profile index to welcome new webste
        <button @click="goUIHome">goUIHome</button>
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