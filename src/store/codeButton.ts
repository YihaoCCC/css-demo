import { defineStore } from "pinia";
// import { ref } from 'vue'

// export const useCodeButtonStore = defineStore('useCodeButtonStore', () => {
//     const showCodeButton = ref(true)
//     const showButton = () =>  {
//         showCodeButton.value = true
//     }
//     function hiddenButton() {
//         debugger
//         showCodeButton.value = false
//     }

//     return {showButton, showCodeButton, hiddenButton}
// })



export const useCodeButtonStore = defineStore('useCodeButtonStore', {
    state: () => {
        return {
            showCodeButton: false,
        }
    },
    actions: {
        // openModal: () => {
        //     this.showModal = true
        // }
        openModal () {
            this.showCodeButton = true
        },
        closeModal() {
            this.showCodeButton  = false
        }
    }
})
