import { defineStore } from "pinia";
import { ref } from 'vue'

export const useCodeButtonStore = defineStore('useCodeButtonStore', () => {
    const showCodeButton = ref(false)
    const showButton = () =>  {
        showCodeButton.value = true
    }
    function hiddenButton() {
        showCodeButton.value = false
    }

    return {showButton, showCodeButton, hiddenButton}
})
