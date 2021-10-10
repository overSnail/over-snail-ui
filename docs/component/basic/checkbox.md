---
title: Checkbox
---

# 复选框

### 基础使用

<br />
<template>
  <my-checkbox>选项一</my-checkbox>
  <my-checkbox v-model="focusValue">选项二</my-checkbox>
</template>

```html
<my-checkbox>选项一</my-checkbox>
<my-checkbox v-model="focusValue">选项二</my-checkbox>
```

### 禁用状态

多选框不可使用
<br />

<template>
  <my-checkbox disabled>选项一</my-checkbox>
  <my-checkbox v-model="focusValue" disabled>选项二</my-checkbox>
</template>

```html
<my-checkbox disabled>选项一</my-checkbox>
<my-checkbox v-model="focusValue" disabled>选项二</my-checkbox>
```

### 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
<br />

<template>
  <div>
    <my-checkbox-group v-model="food">
    <my-checkbox label="大盘鸡">大盘鸡</my-checkbox>
    <my-checkbox label="口水鸡">口水鸡</my-checkbox>
    <my-checkbox label="海南鸡" disabled>海南鸡</my-checkbox>
    <my-checkbox label="三杯鸡">三杯鸡</my-checkbox>
  </my-checkbox-group>
  <p>请点餐: {{food}}</p>
  </div>
</template>

```html
<div>
  <my-checkbox-group v-model="food">
    <my-checkbox label="大盘鸡">大盘鸡</my-checkbox>
    <my-checkbox label="口水鸡">口水鸡</my-checkbox>
    <my-checkbox label="海南鸡" disabled>海南鸡</my-checkbox>
    <my-checkbox label="三杯鸡">三杯鸡</my-checkbox>
  </my-checkbox-group>
  <p>请点餐: {{food}}</p>
</div>
```

### 可选数量限制

使用 min 和 max 属性能够限制可以被勾选的项目的数量。
<br />

<template>
  <div>
    <my-checkbox-group v-model="drinks" :min="2" :max="3">
    <my-checkbox label="快乐水">快乐水</my-checkbox>
    <my-checkbox label="柠檬茶">柠檬茶</my-checkbox>
    <my-checkbox label="营养快线">营养快线</my-checkbox>
    <my-checkbox label="哇哈哈">哇哈哈</my-checkbox>
  </my-checkbox-group>
  <p>请选择天赋[最少2个，最多3个]: {{drinks}}</p>
  </div>
</template>

```html
<div>
  <my-checkbox-group v-model="drinks" :min="2" :max="3">
    <my-checkbox label="快乐水">快乐水</my-checkbox>
    <my-checkbox label="柠檬茶">柠檬茶</my-checkbox>
    <my-checkbox label="营养快线">营养快线</my-checkbox>
    <my-checkbox label="哇哈哈">哇哈哈</my-checkbox>
  </my-checkbox-group>
  <p>请选择天赋[最少2个，最多3个]: {{drinks}}</p>
</div>
```

### 带有边框

<br />
<template>
  <div>
    <div>
      <my-checkbox border size="small">选项一</my-checkbox>
      <my-checkbox border size="small">选项二</my-checkbox>
    </div>
    <br />
    <my-checkbox-group v-model="drinks">
    <my-checkbox label="快乐水" border>快乐水</my-checkbox>
    <my-checkbox label="柠檬茶" border>柠檬茶</my-checkbox>
    <my-checkbox label="营养快线" border>营养快线</my-checkbox>
    <my-checkbox label="哇哈哈" border>哇哈哈</my-checkbox>
  </my-checkbox-group>
  </div>
</template>

```html
<div>
  <div>
    <my-checkbox border size="small">选项一</my-checkbox>
    <my-checkbox border size="small">选项二</my-checkbox>
  </div>
  <my-checkbox-group v-model="drinks">
    <my-checkbox label="快乐水" border>快乐水</my-checkbox>
    <my-checkbox label="柠檬茶" border>柠檬茶</my-checkbox>
    <my-checkbox label="营养快线" border>营养快线</my-checkbox>
    <my-checkbox label="哇哈哈" border>哇哈哈</my-checkbox>
  </my-checkbox-group>
</div>
```

### 按钮样式

<br />
<template>
  <div>
    <my-checkbox-group v-model="drinks" button>
    <my-checkbox label="快乐水">快乐水</my-checkbox>
    <my-checkbox label="柠檬茶">柠檬茶</my-checkbox>
    <my-checkbox label="营养快线">营养快线</my-checkbox>
    <my-checkbox label="哇哈哈">哇哈哈</my-checkbox>
  </my-checkbox-group>
  <br />
  <my-checkbox-group v-model="drinks" button>
    <my-checkbox label="快乐水" size="mini">快乐水</my-checkbox>
    <my-checkbox label="柠檬茶" size="mini">柠檬茶</my-checkbox>
    <my-checkbox label="营养快线" size="mini">营养快线</my-checkbox>
    <my-checkbox label="哇哈哈" size="mini">哇哈哈</my-checkbox>
  </my-checkbox-group>
  </div>
</template>

```html
<div>
  <my-checkbox-group v-model="drinks" button>
    <my-checkbox label="快乐水">快乐水</my-checkbox>
    <my-checkbox label="柠檬茶">柠檬茶</my-checkbox>
    <my-checkbox label="营养快线">营养快线</my-checkbox>
    <my-checkbox label="哇哈哈">哇哈哈</my-checkbox>
  </my-checkbox-group>
  <my-checkbox-group v-model="drinks" button>
    <my-checkbox label="快乐水" size="mini">快乐水</my-checkbox>
    <my-checkbox label="柠檬茶" size="mini">柠檬茶</my-checkbox>
    <my-checkbox label="营养快线" size="mini">营养快线</my-checkbox>
    <my-checkbox label="哇哈哈" size="mini">哇哈哈</my-checkbox>
  </my-checkbox-group>
</div>
```

### Checkbox 属性
参数 | 说明 | 类型 | 可选值 | 默认值
|:-----------:|:-------------|:-------------|:-------------:|:-------------|
| value/v-model | 绑定值 | string/number/boolean | -- | -- |
| label | 选中状态的值，只在checkbox-group有效 | string/number/boolean  | -- | -- |
| disabled | 是否禁用 | boolean | -- | false |
| border | 是否显示边框 | boolean | -- | false |
| size | Radio 的尺寸，仅在 border 为真时有效 | string | large/medium/small/mini | medium |

### Checkbox 事件
事件名称 | 说明 | 回调参数 | 
|:-----------:|:-------------|:-------------|
| change | 绑定值发生变化触发的事件 | 更新后的值 |

### Checkbox-group 属性
参数 | 说明 | 类型 | 可选值 | 默认值
|:-----------:|:-------------|:-------------|:-------------:|:-------------|
| value/v-model | 绑定值 | array | -- | -- |
| size | 多选框尺寸，仅对按钮形式和带边框的复选框有效 | string | large/medium/small/mini | medium |
| disabled | 是否禁用 | boolean | -- | false |
| button | 是否为按钮样式 | boolean | -- | false |
| max | 可被勾选的 checkbox 的最大数量 | number | -- | -- |
| min | 可被勾选的 checkbox 的最小数量 | number | -- | -- |

### Checkbox-group 事件
事件名称 | 说明 | 回调参数 | 
|:-----------:|:-------------|:-------------|
| change | 绑定值发生变化触发的事件 | 更新后的值 |



<script>
export default {
  data() {
    return {
      focusValue: true,
      food: ["海南鸡"],
      drinks: ["快乐水", "哇哈哈"],
    }
  },
  methods: {
  }
}
</script>
