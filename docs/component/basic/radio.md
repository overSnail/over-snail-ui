---
title: Radio 单选框
---

# 单选框

### 基础使用

<br />
<template>
  <my-radio v-model="currentValue" label="1">大闸蟹</my-radio>
  <my-radio v-model="currentValue" label="2">兰花蟹</my-radio>
  <my-radio v-model="currentValue" label="3">青蟹</my-radio>
  <div>选择：{{currentValue}}</div>
</template>

```html
<my-radio v-model="currentValue" label="1">大闸蟹</my-radio>
<my-radio v-model="currentValue" label="2">兰花蟹</my-radio>
<my-radio v-model="currentValue" label="3">青蟹</my-radio>
<div>选择：{{currentValue}}</div>
```

### 禁用状态
<br />
<template>
  <my-radio v-model="currentValue" label="1" disabled>大闸蟹</my-radio>
  <my-radio label="2" disabled>兰花蟹</my-radio>
  <my-radio label="3" disabled>青蟹</my-radio>
</template>

```html
<my-radio v-model="currentValue" label="1" disabled>大闸蟹</my-radio>
<my-radio label="2" disabled>兰花蟹</my-radio>
<my-radio label="3" disabled>青蟹</my-radio>
```

### 单选框组
适用于在多个互斥的选项中选择的场景

<br />
<template>
  <my-radio-group v-model="groupValue">
    <my-radio label="1">大闸蟹</my-radio>
    <my-radio label="2">兰花蟹</my-radio>
    <my-radio label="3">青蟹</my-radio>
  </my-radio-group>
  <div>选择的值：{{groupValue}}</div>
  
  <p>单选框组禁用状态</p>
  <my-radio-group v-model="groupValue" disabled>
    <my-radio label="1">大闸蟹</my-radio>
    <my-radio label="2">兰花蟹</my-radio>
    <my-radio label="3">青蟹</my-radio>
  </my-radio-group>
</template>

```html
<my-radio-group v-model="groupValue">
  <my-radio label="1">大闸蟹</my-radio>
  <my-radio label="2">兰花蟹</my-radio>
  <my-radio label="3">青蟹</my-radio>
</my-radio-group>
<div>选择的值：{{groupValue}}</div>
<my-radio-group v-model="groupValue" disabled>
  <my-radio label="1">大闸蟹</my-radio>
  <my-radio label="2">兰花蟹</my-radio>
  <my-radio label="3">青蟹</my-radio>
</my-radio-group>
```

### 带有边框
<br />
<template>
  <my-radio label="1" border size="large" disabled v-model="groupValue">大闸蟹</my-radio>
  <my-radio label="2" border>兰花蟹</my-radio>
  <my-radio label="3" border size="small">青蟹</my-radio>
  <my-radio label="4" border size="mini">帝王蟹</my-radio>
</template>

```html
<my-radio label="1" border size="large" disabled v-model="groupValue">大闸蟹</my-radio>
<my-radio label="2" border>兰花蟹</my-radio>
<my-radio label="3" border size="small">青蟹</my-radio>
<my-radio label="4" border size="mini">帝王蟹</my-radio>
```

### 按钮样式
<br />
<template>
<my-radio-group v-model="groupValue" button>
  <my-radio label="1">大闸蟹</my-radio>
  <my-radio label="2">兰花蟹</my-radio>
  <my-radio label="3">青蟹</my-radio>
</my-radio-group>
</template>

```html
<template>
<my-radio-group v-model="groupValue" button>
  <my-radio label="1">大闸蟹</my-radio>
  <my-radio label="2">兰花蟹</my-radio>
  <my-radio label="3">青蟹</my-radio>
</my-radio-group>
</template>
```

### Radio 属性

参数 | 说明 | 类型 | 可选值 | 默认值
|:-----------:|:-------------|:-------------|:-------------:|:-------------|
| value/v-model | 绑定值 | string/number/boolean | -- | -- |
| label | Radio的值 | string/number/boolean  | -- | -- |
| disabled | 是否禁用 | boolean | -- | false |
| border | 是否显示边框 | boolean | -- | false |
| size | Radio 的尺寸，仅在 border 为真时有效 | string | large/medium/small/mini | medium |


### Radio-group 属性
参数 | 说明 | 类型 | 可选值 | 默认值
|:-----------:|:-------------|:-------------|:-------------:|:-------------|
| value/v-model | 绑定值 | string/number/boolean | -- | -- |
| button | 是否显示为按钮样式 | boolean | -- | false |
| disabled | 是否禁用 | boolean | -- | false |

### Radio-group 事件
事件名称 | 说明 | 回调参数 | 
|:-----------:|:-------------|:-------------|
| change | 绑定值发生变化触发的事件 | 选中的Radio label值 |

<script>
export default {
  data() {
    return {
      currentValue: "",
      groupValue: "1"
    }
  },
  methods: {
  }
}
</script>