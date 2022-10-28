### 项目结构
```
|-- 项目目录结构
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
