---
title: Popover 弹出框
pageClass: os-page-class
---

# Popover 弹出框

### 基础用法

<p class="os-vuepress-my-p">
</p>

<template>
  <os-popover placement="top" content="我是一大段文本我是一大段文本我是一大段文本我是一大段文本" trigger="hover">
    <os-button type="info" slot="reference">hover激活</os-button>
  </os-popover>
  <os-popover placement="top" content="我是一大段文本我是一大段文本我是一大段文本我是一大段文本" trigger="click">
    <os-button type="info" slot="reference">click激活</os-button>
  </os-popover>
  <os-popover placement="top" content="我是一大段文本我是一大段文本我是一大段文本我是一大段文本" trigger="focus">
    <os-button type="info" slot="reference">focus激活</os-button>
  </os-popover>
  <os-popover placement="top" content="我是一大段文本我是一大段文本我是一大段文本我是一大段文本"  v-model="visible" trigger="manual">
    <os-button type="info" slot="reference" @click="visible=!visible">手动激活</os-button>
  </os-popover>
</template>
<p class="os-vuepress-my-p">
  trigger属性用于设置何时触发 Popover，支持四种触发方式：hover，click，focus 和 manual。使用 slot="reference" 的具名插槽指定触发 Popover 的元素。
</p>

```vue
<template>
  <os-popover
    placement="top"
    content="我是一大段文本我是一大段文本我是一大段文本我是一大段文本"
  >
    <os-button type="info" slot="reference">hover激活</os-button>
  </os-popover>

  <os-popover
    placement="top"
    content="我是一大段文本我是一大段文本我是一大段文本我是一大段文本"
    trigger="click"
  >
    <os-button type="info" slot="reference">click激活</os-button>
  </os-popover>

  <os-popover
    placement="top"
    content="我是一大段文本我是一大段文本我是一大段文本我是一大段文本"
    trigger="focus"
  >
    <os-button type="info" slot="reference">focus激活</os-button>
  </os-popover>

  <os-popover
    placement="top"
    content="我是一大段文本我是一大段文本我是一大段文本我是一大段文本"
    v-model="visible"
    trigger="manual"
  >
    <os-button type="info" slot="reference" @click="visible = !visible"
      >手动激活</os-button
    >
  </os-popover>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  }
};
</script>
```

### 嵌套信息

<p class="os-vuepress-my-p">
  可以在 Popover 中嵌套多种类型信息。
</p>

<template>
  <os-popover
    placement="top"
    content="我是一大段文本我是一大段文本我是一大段文本我是一大段文本"
    trigger="click"
  >
    <div>
      <p>
        <os-tag type="success">雪芸豆</os-tag>
        <os-tag type="text">大闸蟹</os-tag>
        <os-tag type="warning">火腿肠</os-tag>
        <os-tag type="error">碎冰冰</os-tag>
      </p>
      <p style="margin-top: 10px">前排出售上述零食系列</p>
    </div>
    <os-button type="info" slot="reference">click激活</os-button>
  </os-popover>
</template>

```vue
<template>
  <os-popover placement="top" trigger="click" width="300px">
    <div>
      <p>
        <os-tag type="success">雪芸豆</os-tag>
        <os-tag type="text">大闸蟹</os-tag>
        <os-tag type="warning">火腿肠</os-tag>
        <os-tag type="error">碎冰冰</os-tag>
      </p>
      <p style="margin-top: 10px">前排出售上述零食系列</p>
    </div>
    <os-button type="info" slot="reference">click激活</os-button>
  </os-popover>
</template>
```

### 嵌套操作

<p class="os-vuepress-my-p">
  嵌套操作，相比 Dialog 更为轻量
</p>

<template>
  <os-popover
    placement="top"
    width="160"
    trigger="click"
    v-model="visible2">
    <p>确定删除这个鬼玩意儿吗？</p>
    <div style="text-align: right; margin-top: 10px">
      <os-button size="mini" type="text" @click="visible2 = false">取消</os-button>
      <os-button type="primary" size="mini" @click="visible2 = false">确定</os-button>
    </div>
    <os-button type="info" slot="reference">删除</os-button>
  </os-popover>
</template>

```vue
<template>
  <os-popover placement="top" trigger="click" v-model="visible2">
    <p>确定删除这个鬼玩意儿吗？</p>
    <div style="text-align: right; margin-top: 10px">
      <os-button size="mini" type="text" @click="visible2 = false"
        >取消</os-button
      >
      <os-button type="primary" size="mini" @click="visible2 = false"
        >确定</os-button
      >
    </div>
    <os-button type="info" slot="reference">删除</os-button>
  </os-popover>
</template>

<script>
export default {
  data() {
    return {
      visible2: false
    };
  }
};
</script>
```

<!-- 以下是运行代码 -->
<script>
export default {
  data() {
    return {
      visible: false,
      visible2: false
    }
  },
  methods: {
  }
}
</script>

### Popover 属性

|     参数      | 说明                                         | 类型    |                                                          可选值                                                           | 默认值 |
| :-----------: | :------------------------------------------- | :------ | :-----------------------------------------------------------------------------------------------------------------------: | :----- |
|    trigger    | 触发方式                                     | string  |                                                 click/focus/hover/manual                                                  | click  |
|     title     | 标题                                         | string  |                                                            --                                                             | --     |
|    content    | 显示的内容，也可以通过 slot#default 传入 DOM | string  |                                                            --                                                             | --     |
|   disabled    | Popover 是否可用                             | boolean |                                                            --                                                             | false  |
| v-model/value | 状态是否可见                                 | boolean |                                                            --                                                             | true   |
|     width     | 宽度                                         | string  |                                                            --                                                             | 180px  |
|   placement   | Popover 的出现位置                           | string  | top/top-start/top-end <br/>/bottom/bottom-start/bottom-end<br/>/left/left-start/left-end<br/>/right/right-start/right-end | top    |

### Popover 插槽

|   参数    | 说明                          |
| :-------: | :---------------------------- |
|    --     | Popover 内嵌 HTML 文本        |
| reference | 触发 Popover 显示的 HTML 元素 |
