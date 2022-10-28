import { defineStore } from "pinia";

export const useModalStore = defineStore('useModal', {
    state: () => {
        return {
            showModal: false,
        }
    },
    actions: {
        openModal () {
            this.showModal = true
        },
        closeModal() {
            this.showModal  = false
        }
    }
})
