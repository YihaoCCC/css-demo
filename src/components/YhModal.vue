<template>
    <Teleport to="#modal">
        <Transition name="bounce">
            <div class="modal" v-if="useModal.showModal">
                <div class="modalContent">
                    <div class="header">
                        <span>卡片蒙版</span>
                        <svg @click="close" t="1636425236332" class="icon" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2417" width="28" height="28">
                            <path
                                d="M512 1024c282.331429 0 512-229.668571 512-512s-229.668571-512-512-512-512 229.668571-512 512 229.668571 512 512 512zM512 51.2c254.098286 0 460.8 206.701714 460.8 460.8 0 254.098286-206.701714 460.8-460.8 460.8A461.385143 461.385143 0 0 1 51.2 512C51.2 257.901714 257.828571 51.2 512 51.2zM376.466286 647.460571a25.453714 25.453714 0 0 0 18.212571 7.533715c6.582857 0 13.165714-2.56 18.139429-7.533715l99.401143-99.474285 99.401142 99.474285a25.453714 25.453714 0 0 0 18.139429 7.533715c6.656 0 13.165714-2.56 18.139429-7.533715a25.453714 25.453714 0 0 0 0-36.132571L548.132571 512l99.401143-99.401143a25.453714 25.453714 0 0 0 0-36.132571 25.453714 25.453714 0 0 0-36.132571 0L512 475.940571l-99.401143-99.474285a25.453714 25.453714 0 0 0-36.132571 0 25.453714 25.453714 0 0 0 0 36.132571L475.940571 512l-99.474285 99.401143a25.453714 25.453714 0 0 0 0 36.132571z"
                                fill="#DB2827" p-id="2418">
                            </path>
                        </svg>
                    </div>
                    <div class="conntent">
                        <div class="JS codeBox">
                            <code>  
                                dasfsadfadsfadsf
                            </code>
                        </div>
                        <div class="scss codeBox">
                            <code>
                                sdafadsfsadfads
                            </code>
                        </div>
                    </div>
                    <div class="footer">

                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>

</template>

<script setup lang="ts">
// import { getCurrentInstance,ref } from 'vue'
import { useModalStore } from '../store/modal'

const useModal = useModalStore()
const close = () => {
    useModal.closeModal()
}
// const instance = getCurrentInstance()
// const show = ref(instance!.appContext.config.globalProperties.$showModal)

// 使用pina

</script>


<style lang="scss">
.modal {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($color: #666666, $alpha: .6);
    color: var(--theme-font-deeper);
    font-weight: 600;

    .modalContent {
        width: 50%;
        height: 60%;
        background-color: var(--theme-rightContent-color);
        border-radius: 20px;
        padding: 20px 26px;
        box-sizing: border-box;

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-image: linear-gradient(90deg, rgba(161, 161, 161, 0.2) 0%, var(--theme-font-deeper) 50%, rgba(161, 161, 161, 0.2) 99%) 1;
            border-bottom: 1px solid;
            padding-bottom: 10px;
            svg {
                transition: all .3s ease-in-out;
                path {
                    fill: var(--theme-font-deeper);
                    transition: all .3s ease-in-out;
                }
                &:hover {
                    transform: scale(1.02) rotate(90deg);
                    path {
                        fill: var(--main-color);
                    }
                }
            }
            
        }
        .conntent {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            .codeBox {
                width: 50%;
                max-height: 40vh;
                overflow: auto;
            }
        }
    }
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}
</style>