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
        <div class="avatar">
            <img src="https://bcn.135editor.com/files/users/541/5419088/202209/nFkH9gIB_u4ma.png" alt="">
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
        &::before {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            top: 88%;
            left: 50%;
            z-index: 100;
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
        }
        &:hover {
            &::after,&::before {
                visibility: visible;
                opacity: 1;
            }
        }
        &:last-child {
            &::after{
                content: '在git上访问此项目';
                left: -50%;
            }
        }
        &:first-child {
            &::after {
                content: "切换主题模式";
            }
        }
        &:nth-child(2) {
            &::after {
                content: '访问我的知识星球';
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
        width: 34px;
        height: 20px;
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
        top: 10px;
        left: 35px;
        z-index: 0;
        width: 30px;
        height: 3px;
    }

    .star--2 {
        top: 18px;
        left: 28px;
        z-index: 1;
        width: 30px;
        height: 3px;
    }

    .star--3 {
        top: 27px;
        left: 40px;
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