---
title: Breadcrumb 面包屑
pageClass: os-page-class
---

# Breadcrumb 面包屑

### 基础用法

<p class="os-vuepress-my-p">显示当前页面的路径，快速返回之前的任意页面。</p>

<template>
  <os-breadcrumb separator="/">
    <os-breadcrumb-item :to="{ path: '/' }">首页</os-breadcrumb-item>
    <os-breadcrumb-item><a href="/">一级目录</a></os-breadcrumb-item>
    <os-breadcrumb-item>二级目录</os-breadcrumb-item>
    <os-breadcrumb-item>三级目录</os-breadcrumb-item>
  </os-breadcrumb>
</template>

```vue
<template>
  <os-breadcrumb separator="/">
    <os-breadcrumb-item :to="{ path: '/' }">首页</os-breadcrumb-item>
    <os-breadcrumb-item><a href="/">一级目录</a></os-breadcrumb-item>
    <os-breadcrumb-item>二级目录</os-breadcrumb-item>
    <os-breadcrumb-item>三级目录</os-breadcrumb-item>
  </os-breadcrumb>
</template>
```

### 图标分隔符

<p class="os-vuepress-my-p">通过设置 separator-class 可使用相应的 iconfont 作为分隔符，注意这将使 separator 设置失效</p>

<template>
  <os-breadcrumb separator-class="icon-right">
    <os-breadcrumb-item :to="{ path: '/' }">首页</os-breadcrumb-item>
    <os-breadcrumb-item><a href="/">一级目录</a></os-breadcrumb-item>
    <os-breadcrumb-item>二级目录</os-breadcrumb-item>
    <os-breadcrumb-item>三级目录</os-breadcrumb-item>
  </os-breadcrumb>
</template>

```vue
<template>
  <os-breadcrumb separator="/">
    <os-breadcrumb-item :to="{ path: '/' }">首页</os-breadcrumb-item>
    <os-breadcrumb-item><a href="/">一级目录</a></os-breadcrumb-item>
    <os-breadcrumb-item>二级目录</os-breadcrumb-item>
    <os-breadcrumb-item>三级目录</os-breadcrumb-item>
  </os-breadcrumb>
</template>
```

### Breadcrumb 属性

|      参数       | 说明             | 类型   | 可选值 | 默认值 |
| :-------------: | :--------------- | :----- | :----: | :----: |
|    separator    | 分隔符           | string |   --   |   /    |
| separator-class | 图标分隔符 class | string |   --   |   --   |

### BreadcrumbItem 属性

|  参数   | 说明                                                               | 类型          | 可选值 | 默认值 |
| :-----: | :----------------------------------------------------------------- | :------------ | :----: | :----: |
|   to    | 路由跳转对象，同 vue-router 的 to                                  | string/object |   --   |   --   |
| replace | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean       |   --   | false  |
