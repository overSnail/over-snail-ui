---
title: Tooltip 文字提示
pageClass: os-page-class
---

# Tooltip 文字提示

<p class="os-vuepress-my-p">
  常用于展示鼠标 hover 时的提示信息。
</p>

### 基础用法

<p class="os-vuepress-my-p">
  提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。
</p>

<template>
  <div style="position: relative; height: 320px; margin-top: 50px">
    <os-tooltip placement="top-start" content="top-start">
      <os-button class="placement-button" type="info">上左</os-button>
    </os-tooltip>
    <os-tooltip placement="top" content="top">
      <os-button class="placement-button" type="info">上边</os-button>
    </os-tooltip>
    <os-tooltip placement="top-end" content="top-end">
      <os-button class="placement-button" type="info">上右</os-button>
    </os-tooltip>
    <os-tooltip placement="right-start" content="right-start">
      <os-button class="placement-button" type="info">右上</os-button>
    </os-tooltip>
    <os-tooltip placement="right" content="right">
      <os-button class="placement-button" type="info">右边</os-button>
    </os-tooltip>
    <os-tooltip placement="right-end" content="right-end">
      <os-button class="placement-button" type="info">右下</os-button>
    </os-tooltip>
    <os-tooltip placement="bottom-start" content="bottom-start">
      <os-button class="placement-button" type="info">下左</os-button>
    </os-tooltip>
    <os-tooltip placement="bottom" content="bottom">
      <os-button class="placement-button" type="info">下边</os-button>
    </os-tooltip>
    <os-tooltip placement="bottom-end" content="bottom-end">
      <os-button class="placement-button" type="info">下右</os-button>
    </os-tooltip>
    <os-tooltip placement="left-start" content="left-start">
      <os-button class="placement-button" type="info">左上</os-button>
    </os-tooltip>
    <os-tooltip placement="left" content="left">
      <os-button class="placement-button" type="info">左边</os-button>
    </os-tooltip>
    <os-tooltip placement="left-end" content="left-end">
      <os-button class="placement-button" type="info">左下</os-button>
    </os-tooltip>
  </div>
</template>
<p class="os-vuepress-my-p">
  使用content属性来决定hover时的提示信息。由placement属性决定展示效果：placement属性值为：方向-对齐位置；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。如placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。
</p>

```vue
<template>
  <div>
    <os-tooltip placement="top-start" content="top-start">
      <os-button type="info">上左</os-button>
    </os-tooltip>
    <os-tooltip placement="top" content="top">
      <os-button type="info">上边</os-button>
    </os-tooltip>
    <os-tooltip placement="top-end" content="top-end">
      <os-button type="info">上右</os-button>
    </os-tooltip>
    <os-tooltip placement="right-start" content="right-start">
      <os-button type="info">右上</os-button>
    </os-tooltip>
    <os-tooltip placement="right" content="right">
      <os-button type="info">右边</os-button>
    </os-tooltip>
    <os-tooltip placement="right-end" content="right-end">
      <os-button type="info">右下</os-button>
    </os-tooltip>
    <os-tooltip placement="bottom-start" content="bottom-start">
      <os-button type="info">下左</os-button>
    </os-tooltip>
    <os-tooltip placement="bottom" content="bottom">
      <os-button type="info">下边</os-button>
    </os-tooltip>
    <os-tooltip placement="bottom-end" content="bottom-end">
      <os-button type="info">下右</os-button>
    </os-tooltip>
    <os-tooltip placement="left-start" content="left-start">
      <os-button type="info">左上</os-button>
    </os-tooltip>
    <os-tooltip placement="left" content="left">
      <os-button type="info">左边</os-button>
    </os-tooltip>
    <os-tooltip placement="left-end" content="left-end">
      <os-button type="info">左下</os-button>
    </os-tooltip>
  </div>
</template>
```

### 主题

<p class="os-vuepress-my-p">
  Tooltip 组件提供了两个不同的主题：dark和light。
</p>

<template>
  <os-tooltip placement="top" content="提示文本">
    <os-button type="info">Dark</os-button>
  </os-tooltip>
  <os-tooltip placement="bottom" effect="light" content="提示文本">
    <os-button type="info">Light</os-button>
  </os-tooltip>
</template>
<p class="os-vuepress-my-p">
  通过设置effect属性来改变主题，默认为dark。
</p>

```vue
<template>
  <div>
    <os-tooltip placement="top" content="提示文本">
      <os-button type="info">Dark</os-button>
    </os-tooltip>
    <os-tooltip placement="bottom" effect="light" content="提示文本">
      <os-button type="info">Light</os-button>
    </os-tooltip>
  </div>
</template>
```

### 更多 Content

<p class="os-vuepress-my-p">
  展示多行文本或者是设置文本内容的格式
</p>

<template>
  <os-tooltip placement="top">
    <div slot="content">
      <i class="iconfont icon-info" />
      <span style="color: #67C23A">此处应有个建议文本</span>
    </div>
    <os-button type="info">更多内容</os-button>
  </os-tooltip>
</template>
<p class="os-vuepress-my-p">
  用具名slot分发content，替代tooltip中的content属性。
</p>

```vue
<template>
  <os-tooltip placement="top">
    <div slot="content">
      <i class="iconfont icon-info" />
      <span style="color: #67C23A">此处应有个建议文本</span>
    </div>
    <os-button type="info">更多内容</os-button>
  </os-tooltip>
</template>
```

### 指令方式

<p class="os-vuepress-my-p">
  使用v-tooltip快速完成文字提示
</p>

<template>
  <os-button type="info" v-tooltip.bottom.light="'你的查看姿势很优美，值得点赞'">查看</os-button>
</template>
<p class="os-vuepress-my-p">
  使用指令方式时，可以添加placement对应的12种位置修饰符和effect对应的2种主题修饰符。
</p>

```vue
<template>
  <os-button type="info" v-tooltip.bottom.light="'你的查看姿势很优美，值得点赞'"
    >点击</os-button
  >
</template>
```

### Tooltip 属性

|   参数    | 说明                                         | 类型    |                                                          可选值                                                           | 默认值 |
| :-------: | :------------------------------------------- | :------ | :-----------------------------------------------------------------------------------------------------------------------: | :----- |
|  effect   | 默认提供的主题                               | string  |                                                        dark/light                                                         | dark   |
|  content  | 显示的内容，也可以通过 slot#content 传入 DOM | string  |                                                            --                                                             | --     |
| placement | Tooltip 的出现位置                           | string  | top/top-start/top-end <br/>/bottom/bottom-start/bottom-end<br/>/left/left-start/left-end<br/>/right/right-start/right-end | top    |
| disabled  | Tooltip 是否可用                             | boolean |                                                            --                                                             | false  |
