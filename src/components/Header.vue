<template>
    <div class="header">
        <div class="theme headerItem">
            <div class="toggleWrapper">
                <input @change="changeTheme" v-model="theme" type="checkbox" class="dn" id="dn">
                <label for="dn" class="toggle">
                    <span class="toggle__handler">
                        <span class="crater crater--1"></span>
                        <span class="crater crater--2"></span>
                        <span class="crater crater--3"></span>
                    </span>
                    <span class="star star--1"></span>
                    <span class="star star--2"></span>
                    <span class="star star--3"></span>
                    <span class="star star--4"></span>
                    <span class="star star--5"></span>
                    <span class="star star--6"></span>
                </label>
            </div>
        </div>
        <div class="headerItem">
            <div class="avatar">
                <img src="https://bcn.135editor.com/files/users/541/5419088/202209/nFkH9gIB_u4ma.png" alt="">
            </div>
            <div class="aboutMy">
                <div class="myNote item" @click="GoYuQue"> 
                    <svg t="1663492154977" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        p-id="2676" width="32" height="32">
                        <path d="M228.7 643.9c-0.1 0.1-0.2 0.3-0.3 0.4 3.9-4.4 8-9 12-13.5-7.5 8.4-11.7 13.1-11.7 13.1z"
                            fill="#1590E9" p-id="2677"></path>
                        <path
                            d="M894 298.1l25.6-15.1c10.4-6.1 9.1-21.5-2.1-25.9l-12.3-4.8c-18-7.1-34.2-18.2-46.7-33-15.7-18.5-44.7-45.1-90.9-60.8-52.7-18-142.9-14.4-193.2-10.5-15.9 1.2-25 18.4-17.4 32.5 42.6 78.6 16.7 114.3-5.7 140.7-34.3 40.4-97.4 112.2-160.7 183.6 21.9-24.5 41.8-46.8 58.1-65.1 36.4-40.8 91.3-61.5 145.1-51.7 171.5 31.3 191 253.4-9.2 385.6 26.1-1.4 52.6-3.3 79.2-6 252.6-26 272.6-232.1 218-333.9-19.4-36.1-22.2-60.5-20.1-83.9 2-21.5 13.8-40.8 32.3-51.7z"
                            fill="#99C236" p-id="2678"></path>
                        <path d="M212.8 704.5C241.1 672.9 316 589 390.7 504.7c-54.6 61.2-121.8 136.7-177.9 199.8z"
                            fill="#1590E9" p-id="2679"></path>
                        <path
                            d="M216.3 758.6c-19.5-2.5-28.2-25.6-15.5-40.6-51.7 58.3-91.7 103.5-99.1 112.6-24.1 29.5 247.7 97.9 482.6-56.8 0.1-0.1 0.3-0.2 0.4-0.3-156.5 8.2-298.5-5.9-368.4-14.9z"
                            fill="#CAC134" p-id="2680"></path>
                        <path
                            d="M593.9 387.9c-53.8-9.8-108.7 10.9-145.1 51.7-16.3 18.2-36.2 40.5-58.1 65.1C316 589 241.1 672.9 212.8 704.5c-4.1 4.6-8.1 9.1-12 13.5-12.7 14.9-4 38 15.5 40.6 69.9 9 211.9 23.1 368.3 15 200.2-132.3 180.8-354.4 9.3-385.7z"
                            fill="#029F40" p-id="2681"></path>
                    </svg>
                    <span>我的知识星球</span>
                </div>
                <div class=" item" @click="GoGit">
                    <svg t="1663491437959" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        p-id="2379" width="32" height="32">
                        <path
                            d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48a491.296 491.296 0 0 1 128.16-17.248c43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576C877.472 942.624 1024 750.784 1024 524.64c0-282.784-229.248-512-512-512z"
                            p-id="2380"></path>
                    </svg>
                    <span>git访问此项目</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
const theme = ref(false)

const changeTheme = () => {
    const doc = document.documentElement
    const themeColor = theme.value ? 'light' : 'default'

    doc.dataset.theme = themeColor
    console.log(theme.value);
}

const isCloseBar = ref(false)
const closeLeftBar = () => {
    isCloseBar.value = !isCloseBar.value
}

const GoGit = () => {
    window.open('https://github.com/YihaoCCC/')
}
const GoYuQue = () => {
    window.open('https://www.yuque.com/chenyiyi-khcwz')
}
</script>


<style lang="scss" scoped>
.header {
    width: 100%;
    height: 68px;
    background-color: transparent;
    z-index: 100;
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .color {
        color: var(--theme-font-deeper);
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%; 
        }
        svg {
            width: 100%;
            height: 100%;

            path {
                fill: var(--theme-font-deeper);
            }
        }
    }
    .headerItem {
        width: 6%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 50px;
        font-size: 14px;
        color: var(--theme-font-deeper);
        .aboutMy {
            position: absolute;
            width: 160px;
            visibility: hidden;
            opacity: 0;
            height: 0px;
            top: 102%;
            left: -80%;
            background-color: var(--theme-background);
            border-radius: 20px;
            transition: all .3s ease-in-out;
            z-index: 100;
            padding: 10px 18px;
            box-sizing: border-box;
            box-shadow: 0 0 20px var(--theme-font-deeper);
            .item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                border-bottom: 1px dashed var(--theme-font-deeper);
                padding: 10px 0;
                font-size: 12px;
                &:last-child {
                    border: none;
                }
                svg {
                    width: 30px;
                    height: 30px;
                    path {
                        fill: var(--theme-font-deeper);
                    }
                }
            }
        }
        &::before {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            top: 88%;
            left: 50%;
            z-index: 101;
            visibility: hidden;
            opacity: 0;
            border-bottom: 8px solid var(--theme-background);
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            transition: all .3s ease-in-out;
        }
        &::after {
            content: '';
            position: absolute;
            visibility: hidden;
            opacity: 0;
            width: 150px;
            height: 40px;
            padding: 8px 15px;
            box-sizing: border-box;
            text-align: center;
            top: 100%;
            left: -20%;
            background-color: var(--theme-background);
            border-radius: 20px;
            transition: all .3s ease-in-out;
            box-shadow: 0 0 20px var(--theme-font-deeper);
        }
        &:hover {
            &::before {
                visibility: visible;
                opacity: 1;
            }
            &:first-child {
                &::after {
                    visibility: visible;
                    opacity: 1;
                }
            }

            .aboutMy {
                height: 120px;
                visibility: visible;
                opacity: 1;
            }
        }
        &:first-child {
            &::after {
                content: "切换主题模式";       
            }
        }
    }
}

.theme {
    /* From uiverse.io by @mobinkakei */
    .toggleWrapper {
        overflow: hidden;
        color: white;
    }

    .toggleWrapper input {
        position: absolute;
        left: -199em;
    }

    .toggle {
        cursor: pointer;
        display: inline-block;
        position: relative;
        width: 70px;
        height: 30px;
        background-color: #83d8ff;
        border-radius: 84px;
        transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
        transform: scale(0.7);
    }

    .toggle__handler {
        display: inline-block;
        position: relative;
        z-index: 1;
        top: 3px;
        left: 3px;
        width: 22.5px;
        height: 22.5px;
        background-color: #ffcf96;
        border-radius: 50px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, .3);
        transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
        transform: rotate(-45deg);
    }

    .toggle__handler .crater {
        position: absolute;
        background-color: #e8cda5;
        opacity: 0;
        transition: opacity 200ms ease-in-out;
        border-radius: 100%;
    }

    .toggle__handler .crater--1 {
        top: 18px;
        left: 10px;
        width: 4px;
        height: 4px;
    }

    .toggle__handler .crater--2 {
        top: 28px;
        left: 22px;
        width: 6px;
        height: 6px;
    }

    .toggle__handler .crater--3 {
        top: 10px;
        left: 25px;
        width: 8px;
        height: 8px;
    }

    .star {
        position: absolute;
        background-color: #fff;
        transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
        border-radius: 50%;
    }

    .star--1 {
        top: 6px;
        left: 32px;
        z-index: 0;
        width: 30px;
        height: 3px;
    }

    .star--2 {
        top: 15px;
        left: 28px;
        z-index: 1;
        width: 30px;
        height: 3px;
    }

    .star--3 {
        top: 22px;
        left: 35px;
        z-index: 0;
        width: 30px;
        height: 3px;
    }

    .star--4,
    .star--5,
    .star--6 {
        opacity: 0;
        transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    .star--4 {
        top: 16px;
        left: 11px;
        z-index: 0;
        width: 2px;
        height: 2px;
        transform: translate3d(3px, 0, 0);
    }

    .star--5 {
        top: 32px;
        left: 17px;
        z-index: 0;
        width: 3px;
        height: 3px;
        transform: translate3d(3px, 0, 0);
    }

    .star--6 {
        top: 36px;
        left: 28px;
        z-index: 0;
        width: 2px;
        height: 2px;
        transform: translate3d(3px, 0, 0);
    }

    input:checked+.toggle {
        background-color: #749dd6;
    }

    input:checked+.toggle:before {
        color: #749ed7;
    }

    input:checked+.toggle:after {
        color: #fff;
    }

    input:checked+.toggle .toggle__handler {
        background-color: #ffe5b5;
        transform: translate3d(40px, 0, 0) rotate(0);
    }

    input:checked+.toggle .toggle__handler .crater {
        opacity: 1;
    }

    input:checked+.toggle .star--1 {
        width: 2px;
        height: 2px;
    }

    input:checked+.toggle .star--2 {
        width: 4px;
        height: 4px;
        transform: translate3d(-5px, 0, 0);
    }

    input:checked+.toggle .star--3 {
        width: 2px;
        height: 2px;
        transform: translate3d(-7px, 0, 0);
    }

    input:checked+.toggle .star--4,
    input:checked+.toggle .star--5,
    input:checked+.toggle .star--6 {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }

    input:checked+.toggle .star--4 {
        transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    input:checked+.toggle .star--5 {
        transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    input:checked+.toggle .star--6 {
        transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

}
</style>