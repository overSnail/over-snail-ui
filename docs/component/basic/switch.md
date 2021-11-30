---
title: Switch 开关
pageClass: os-page-class
---

# Switch 开关

<p class="os-vuepress-my-p">
  表示两种相互对立的状态间的切换，多用于触发「开/关」。
</p>
 
### 基础用法

<div class="example-area">
  <template>
  <os-switch v-model="value1" active-color="green" inactive-color="orange" />
  <div>
    当前选择值：{{value1}}  
  </div>
</template>
</div>

<p class="os-vuepress-my-p">
  绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。
</p>

```vue
<template>
  <os-switch v-model="value1" active-color="green" inactive-color="orange" />
</template>
```

### 文字描述

<div class="example-area">
  <template>
  <os-switch v-model="value2" active-text="智能施法" inactive-text="手动施法" />
</template>
</div>

<p class="os-vuepress-my-p">
  使用active-text属性与inactive-text属性来设置开关的文字描述。
</p>

```vue
<template>
  <os-switch v-model="value2" active-text="智能施法" inactive-text="手动施法" />
</template>
```

### 扩展的 value 类型

<div class="example-area">
  <template>
  <os-switch v-model="value3" :active-value="100" :inactive-value="10" />
  <div style="margin-top: 10px">当前的选择值：{{value3}}</div>
</template>
</div>

<p class="os-vuepress-my-p">
  设置active-value和inactive-value属性，接受Boolean, String或Number类型的值。
</p>

```vue
<template>
  <os-switch v-model="value3" :active-value="100" :inactive-value="10" />
</template>
```

### 禁用状态

<div class="example-area">
  <template>
  <os-switch v-model="value4" disabled/>
</template>
</div>

<p class="os-vuepress-my-p">
  设置disabled属性，接受一个Boolean，设置true即可禁用。
</p>

```vue
<template>
  <os-switch v-model="value4" disabled />
</template>
```

<!-- 以下是运行代码 -->
<script>
export default {
  data() {
    return {
      value1: true,
      value2: "",
      value3: 10,
      value4: false,
      value5: "",
      value6: "",
      value7: "",
      value8: ""
    }
  }
}
</script>

### Switch 属性

|      参数       | 说明                    | 类型                      | 可选值 | 默认值  |
| :-------------: | :---------------------- | :------------------------ | :----: | :------ |
| value / v-model | 绑定值                  | boolean/string/number     |   --   | --      |
|    disabled     | 是否禁用                | boolean                   |   --   | false   |
|   active-text   | switch 打开时的文字描述 | string                    |   --   | --      |
|  inactive-text  | switch 关闭时的文字描述 | string                    |   --   | --      |
|  active-value   | switch 打开时的值       | boolean / string / number |   --   | true    |
| inactive-value  | switch 关闭时的值       | boolean / string / number |   --   | false   |
|  active-color   | switch 打开时的背景色   | string                    |   --   | #00554a |
| inactive-color  | switch 关闭时的背景色   | string                    |   --   | #d8d8d8 |
