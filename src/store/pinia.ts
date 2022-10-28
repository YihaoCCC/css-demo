import { defineStore } from 'pinia';
import { ref,computed } from 'vue'
const usePiniaTest = defineStore('StoreTest',() => {
    const counter = ref(0)
    // state
    const increment = () => {
        counter.value ++
    }
    // action
    const dele = () => {
        counter.value -= 1
        
    }
    const double = () => {
        return counter.value * 2
    }
    const computedDouble = computed(() => counter.value * 2)
    // getter
    return { counter, increment, dele, double, computedDouble }
})

export { usePiniaTest }