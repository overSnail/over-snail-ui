---
title: Popconfirm 气泡确认框
pageClass: os-page-class
---

# Popconfirm 气泡确认框

<p class="os-vuepress-my-p">
  点击元素，弹出气泡确认框。
</p>

### 基础用法

<p class="os-vuepress-my-p">
  Popconfirm 的属性与 Popover 很类似，因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。
</p>

<template>
  <os-popconfirm
    placement="top"
    width="200px"
    title="确定删除这份信息吗？"
    @confirm="onConfirm"
    @cancel="onCancel"
    >
    <os-button type="info" slot="reference">删除</os-button>
  </os-popconfirm>
</template>

```vue
<template>
  <os-popconfirm
    placement="top"
    width="200px"
    title="确定删除这份信息吗？"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <os-button type="info" slot="reference">删除</os-button>
  </os-popconfirm>
</template>

<script>
export default {
  data() {},
  methods: {
    onConfirm() {
      this.$message.success("你点击了确认按钮");
    },
    onCancel() {
      this.$message.info("你点击了取消按钮");
    }
  }
};
</script>
```

### 自定义

<p class="os-vuepress-my-p">
  可以在 Popconfirm 中自定义内容。
</p>

<template>
  <os-popconfirm
    placement="top"
    width="200px"
    title="这件事情分享给组员吗？"
    confirm-button-text="可以"
    cancel-button-text="算了"
    icon="icon-share"
    icon-color="#67C23A"
    @confirm="onConfirm"
    @cancel="onCancel"
    >
    <os-button type="info" slot="reference">删除</os-button>
  </os-popconfirm>
</template>

```vue
<template>
  <os-popconfirm
    placement="top"
    width="200px"
    title="这件事情分享给组员吗？"
    confirm-button-text="可以"
    cancel-button-text="算了"
    icon="icon-share"
    icon-color="#67C23A"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <os-button type="info" slot="reference">删除</os-button>
  </os-popconfirm>
</template>

<script>
export default {
  data() {},
  methods: {
    onConfirm() {
      this.$message.success("你点击了确认按钮");
    },
    onCancel() {
      this.$message.info("你点击了取消按钮");
    }
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
    onConfirm() {
      this.$message.success("你点击了确认按钮")
    },
    onCancel() {
      this.$message.info("你点击了取消按钮")
    }
  }
}
</script>

### Popconfirm 属性

|        参数         | 说明          | 类型    | 可选值 | 默认值       |
| :-----------------: | :------------ | :------ | :----: | :----------- |
|        title        | 标题          | string  |   --   | --           |
| confirm-button-text | 确认按钮文字  | string  |   --   | --           |
| cancel-button-text  | 取消按钮文字  | string  |   --   | --           |
| confirm-button-type | 确认按钮类型  | string  |   --   | primary      |
| cancel-button-type  | 取消按钮类型  | string  |   --   | text         |
|        icon         | Icon          | string  |   --   | icon-warning |
|     icon-color      | Icon 颜色     | string  |   --   | #e6a23c      |
|      hide-icon      | 是否隐藏 Icon | boolean |   --   | false        |

### Popconfirm 插槽

|   参数    | 说明                             |
| :-------: | :------------------------------- |
| reference | 触发 Popconfirm 显示的 HTML 元素 |

### Popconfirm 事件

| 事件名称 | 说明               | 回调参数 |
| :------: | :----------------- | :------: |
| confirm  | 点击确认按钮时触发 |    --    |
|  cancel  | 点击取消按钮时触发 |    --    |
