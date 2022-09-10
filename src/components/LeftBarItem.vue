<template>
    <div class="routeItem" v-for="item in routeList" @click="goPage(item.path)">
        {{item.name}}
    </div>
</template>
<script lang="ts" setup>
    import { routeList } from '../routerItem/routerList'
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const goPage = (path:string) => {
        router.push(path)
    }   
</script>