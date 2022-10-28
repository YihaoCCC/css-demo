<template>
    <div class="pinia">
        <div class="testItem">
            直接使用：{{usePiniaTest().counter}}
        </div>
        <div class="testItem">
            通过Mustache语法获取：{{usePiniaTest().double()}}
        </div>
        <div class="testItem">
            直接赋值：{{counter1}}
        </div>
        <div class="testItem">
            获取二倍：{{counter4}}
        </div>
        <div class="testItem">
            通过computed：{{counter2}}
        </div>
        <div class="testItem">
            通过toRefs：{{counter3.counter}}
        </div>
        <div class="testItem">
            通过torefs结构：{{counter}}
        </div>
        <div class="testItem">
            {{computedDouble}}
        </div>
        <div class="testItem">

        </div>
        
       
       
        <button @click="usePiniaTest().increment()">add usePiniaTest().increment()</button>
        <button @click="add">直接对store中值进行++</button>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { usePiniaTest } from '../../../store'
import { storeToRefs  } from 'pinia';
    const store = usePiniaTest() 
    const counter1 = usePiniaTest().counter
    const counter2 = computed(() => usePiniaTest().counter)
    const counter3 = storeToRefs(store)
    const { counter, computedDouble } = storeToRefs(store)
    const counter4 = usePiniaTest().double()
    const add = () => {
        store.counter ++
    }

</script>