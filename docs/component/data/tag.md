---
title: Tag 标签
pageClass: os-page-class
---

# Tag 标签

### 基础用法

<br />
<template>
  <os-tag>土豆泥</os-tag>
  <os-tag type="success">雪芸豆</os-tag>
  <os-tag type="text">大闸蟹</os-tag>
  <os-tag type="warning">火腿肠</os-tag>
  <os-tag type="error">碎冰冰</os-tag>
</template>
<br />
<br />
由type属性来选择tag的类型。

```vue
<template>
  <os-tag>土豆泥</os-tag>
  <os-tag type="success">雪芸豆</os-tag>
  <os-tag type="text">大闸蟹</os-tag>
  <os-tag type="warning">火腿肠</os-tag>
  <os-tag type="error">碎冰冰</os-tag>
</template>
```

### 可移除标签

<br />
<template>
  <os-tag closeable>土豆泥</os-tag>
  <os-tag type="success" closeable>雪芸豆</os-tag>
  <os-tag type="text" closeable>大闸蟹</os-tag>
  <os-tag type="warning" closeable>火腿肠</os-tag>
  <os-tag type="error" closeable>碎冰冰</os-tag>
</template>
<br />
<br />
设置closable属性可以定义一个标签是否可移除。

```vue
<template>
  <os-tag closeable>土豆泥</os-tag>
  <os-tag type="success" closeable>雪芸豆</os-tag>
  <os-tag type="text" closeable>大闸蟹</os-tag>
  <os-tag type="warning" closeable>火腿肠</os-tag>
  <os-tag type="error" closeable>碎冰冰</os-tag>
</template>
```

### 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<br />
<template>
  <os-tag >默认标签</os-tag>
  <os-tag size="medium" >中等标签</os-tag>
  <os-tag size="small" >小型标签</os-tag>
  <os-tag size="mini" >超小标签</os-tag>
</template>
<br />
<br />
额外的尺寸：medium、small、mini，通过设置size属性来配置它们

```vue
<template>
  <os-tag>默认标签</os-tag>
  <os-tag size="medium">中等标签</os-tag>
  <os-tag size="small">小型标签</os-tag>
  <os-tag size="mini">超小标签</os-tag>
</template>
```

### 不同主题

Tag 组件提供了三个不同的主题：dark、light 和 plain

<br />
<template>
  <div class="os-vuepress-my-p">
    <span>light ：</span>
    <os-tag>土豆泥</os-tag>
    <os-tag type="success">雪芸豆</os-tag>
    <os-tag type="text">大闸蟹</os-tag>
    <os-tag type="warning">火腿肠</os-tag>
    <os-tag type="error">碎冰冰</os-tag>
  </div>
  <div class="os-vuepress-my-p">
    <span>dark ：</span>
    <os-tag effect="dark">土豆泥</os-tag>
    <os-tag effect="dark" type="success">雪芸豆</os-tag>
    <os-tag effect="dark" type="text">大闸蟹</os-tag>
    <os-tag effect="dark" type="warning">火腿肠</os-tag>
    <os-tag effect="dark" type="error">碎冰冰</os-tag>
  </div>
  <div class="os-vuepress-my-p">
    <span>plain：</span>
    <os-tag effect="plain">土豆泥</os-tag>
    <os-tag effect="plain" type="success">雪芸豆</os-tag>
    <os-tag effect="plain" type="text">大闸蟹</os-tag>
    <os-tag effect="plain" type="warning">火腿肠</os-tag>
    <os-tag effect="plain" type="error">碎冰冰</os-tag>
  </div>
</template>
<br />
<br />
通过设置effect属性来改变主题，默认为 light

```vue
<template>
  <div class="os-vuepress-my-p">
    <span>light ：</span>
    <os-tag>土豆泥</os-tag>
    <os-tag type="success">雪芸豆</os-tag>
    <os-tag type="text">大闸蟹</os-tag>
    <os-tag type="warning">火腿肠</os-tag>
    <os-tag type="error">碎冰冰</os-tag>
  </div>
  <div class="os-vuepress-my-p">
    <span>dark ：</span>
    <os-tag effect="dark">土豆泥</os-tag>
    <os-tag effect="dark" type="success">雪芸豆</os-tag>
    <os-tag effect="dark" type="text">大闸蟹</os-tag>
    <os-tag effect="dark" type="warning">火腿肠</os-tag>
    <os-tag effect="dark" type="error">碎冰冰</os-tag>
  </div>
  <div class="os-vuepress-my-p">
    <span>plain：</span>
    <os-tag effect="plain">土豆泥</os-tag>
    <os-tag effect="plain" type="success">雪芸豆</os-tag>
    <os-tag effect="plain" type="text">大闸蟹</os-tag>
    <os-tag effect="plain" type="warning">火腿肠</os-tag>
    <os-tag effect="plain" type="error">碎冰冰</os-tag>
  </div>
</template>
```

### Tag 属性

|        参数        | 说明             | 类型    |               可选值               | 默认值  |
| :----------------: | :--------------- | :------ | :--------------------------------: | :------ |
|        type        | 类型             | string  | primary/success/text/warning/error | primary |
|     closeable      | 是否可关闭       | boolean |                 --                 | false   |
|       effect       | 主题             | string  |          light/dark/plain          | light   |
|        size        | 尺寸             | string  |      large/medium/small/mini       | large   |
| disableTransitions | 是否禁用渐变动画 | boolean |                 --                 | false   |
