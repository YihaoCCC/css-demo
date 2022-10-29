# Css 组件库

`Vue3+Vite+TypeScript` 
 `<script setup>` 
[VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
  
>从VueLearn router-demo的组件库抽离组件，这个仓库以后就用来做样式库，无任何逻辑处理，可以直接供外部调用。如果必要的时候需要用到Js代码建议使用`vue3`的`setup`语法进行统一维护
### 项目结构
```
|-- dist       // 打包文件夹
|-- public     // 静态资源文件 
|-- src       // 项目源码
    |-- App.vue        // 根组件App  
    |-- global.scss    // 全局样式文件
    |-- main.ts        // 项目全局ts文件
    |-- style.css      // 全局样式文件
    |-- vite-env.d.ts  // ts类型定义文件
    |-- assets         // 静态资源文件
    |-- components     // 可抽离组件片资源文件
    |-- plugins        // 项目插件资源
    |-- router         // 项目路由文件
    |-- routerItem     // 前端侧边栏渲染目录结构
    |-- store          // 全局存储
    |-- views          // 子页面（举例）
    |   |-- interested     // 子页面一级父文件夹
    |   |   |-- iphone14   // 子页面二级父文件夹
    |   |   |   |-- iphone14.scss
    |   |   |   |-- iphone14.vue
    |   |   |-- text
    |   |   |   |-- textBackImg.vue
    |   |   |-- textPeople
    |   |       |-- testpeople.scss
    |   |       |-- testPeople.vue
|-- tsconfig.json          // ts配置文件
|-- vite.config.ts        // vite配置文件
```
## 一：添加新的组件页面和路由

项目制定了添加页面的主流程，如下流程所示：

#### 1：`routerItem` 文件夹中定义了侧边导航栏的文件名和点击后的跳转路径

```JavaScript
// 如果新增页面，在这里写新页面的标题和点击路径即可渲染至侧边栏
{
        path: '/home/dashbord',
        name: '主页'
    },
    {   
        path: '/home/mouseCard',
        name: '鼠标进入卡片'
    },
    {
        path: '/home/loading',
        name: '我的loading',
        children: [
            {
                path: '/home/loading/loading1',
                name: "loading1",
            },
            {
                path: '/home/loading/loading2',
                name: 'loading2'
            }
        ]
    }
```
> 注意，这里规定了侧边栏的的ts类型
```TypeScript
interface myRouterItem {
    path :string,
    name: string,
    children?: array<myRouterItem>
}

```
#### 2：在`router`中新增对应的路由信息
> path一定要与侧边栏的path对应，否则跳转失败
```TypeScript
export const routes:RouteRecordRaw[] = [
    {
        path : '/',
        name: 'doorIndex',
        component: () => import('../views/doorIndex/index.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue'),
        redirect: '/home/dashbord',
        children: [
            {
                path: 'dashbord',
                name: 'dashbord',
                component: () => import('../views/dashbord/dashbord.vue')
            },
        ]
    }
}
```

## 二：全局主题样式
由于本系统有两套主题模式，所以不建议使用固定的`css`颜色值，style.css文件中定义了两套不同的主题风格的样式文件，在组件中直接通过`var`关键字调用即可实现与主题的联动
```Css
:root[data-theme=light] {
  --theme-background: #fff;
  --theme-font-color: #222629;
  --theme-font-deeper: #18181b;
  --theme-icon-color: rgb(186, 186, 186);
  --theme-active-color: rgb(53, 52, 52);
  --theme-rightContent-color: #f8f8f8;
  --theme-rightContent-boxShadow: rgba(114, 114, 114, 0.603) 0px 0px 30px;
  --theme-rightContent-border: 2px rgba(127, 127, 127, 0.384) solid;
}

:root {
  --main-color:#c026d3;
  --theme-background: #18181b;
  --theme-font-color: #71717a;
  --theme-icon-color: #71717a;
  --theme-font-deeper: #fff;
  --theme-rightContent-color: #1a1a1d;
  --theme-rightContent-boxShadow: rgba(150, 150, 150, 0.3) 0px 0px 30px;
  --theme-rightContent-border: 2px rgba(255,255,255,0.4) solid;
  --theme-active-color: #fff;
  --color-active-background: #c026d3;
  --root-light-color: #213547;
  --root-dark-color: #666;
}
```
### 3：组件目录结构
新添加的页面建议`vue`文件与`scss`文件分开展示

----
1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
