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
                    <div class="content">
                        <div class="JS codeBox">
                            <div class="title">
                                <span>
                                    vue3.0
                                </span>
                                <button @click="copyCode('html')">
                                    点击复制
                                </button>
                            </div>
                            <v-md-preview :text="htmlcode" height="400px"></v-md-preview>
                        </div>
                        <div class="scss codeBox">
                            <div class="title">
                                <span>
                                    scss(less)
                                </span>
                                <button @click="copyCode('css')">
                                    点击复制
                                </button>
                            </div>
                            <v-md-preview :text="cssCode"></v-md-preview>
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
import { useModalStore } from '../store/modal'

const useModal = useModalStore()
const close = () => {
    // 使用pina控制开关
    useModal.closeModal()
}
const props = defineProps({
    htmlcode: {
        type: String,
        default: '### 暂未更新此部分代码！'
    },
    cssCode: {
        type: String,
        default: '### 暂未更新此部分代码'
    }
})
// 点击复制
const copyCode = (type:string) => {
    let code
    switch(type) {
        case 'html': {
            code = props.htmlcode
            console.log(props.htmlcode);            
            break;
        }
        case 'css' : {
            code = props.cssCode
            console.log(props.cssCode);            
            break;
        }
        default: {
            console.log('error');
        }
    }
      // 创建一个input标签，并将需要复制的文本绑定到input标签
      const inp = document.createElement("input");
      inp.type = "text";
      if(code) {
        inp.value = code;
      }
      // 向body节点添加这个input标签
      document.body.appendChild(inp);
      // 调用input标签的select()方法，选中文本
      inp.select();
      // 调用# document.execCommand()方法执行copy命令
      document.execCommand("Copy", true);
      // 从DOM中移除该input标签
      document.body.removeChild(inp);

}


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
    z-index: 101;

    .modalContent {
        width: 60%;
        height: 70%;
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
        .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            .codeBox {
                width: 49%;
                max-height: 60vh;
                overflow: auto;
                .title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 5px  10px 0;
                    button {
                        color: inherit;
                        border-radius: 5px;
                        padding: 3px 5px;
                        border: none;
                        background-color: var(--theme-rightContent-color);
                        transition: all .3s ease-in-out;
                        &:hover {
                            background-color: var(--main-color);
                        }
                        
                    }
                }
                &::-webkit-scrollbar {
                    width: 8px;
                    height: 4px;
                }
                &::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 5px var(--theme-font-deeper);
                    background: var(--theme-rightContent-color);
                }
                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                    border-radius: 0;
                    background: rgba(0,0,0,0.1);
                }
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

.github-markdown-body {
    padding: 0 !important;

}
</style>