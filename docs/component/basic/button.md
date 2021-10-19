---
title: Button 按钮
---

# 按钮

<template>
  <os-button>按钮一</os-button>
  <os-button type="info">按钮二</os-button>
  <os-button type="success">按钮三</os-button>
  <os-button type="warning">按钮四</os-button>
  <os-button type="error">按钮五</os-button>
  <os-button type="text">按钮六</os-button>
</template>


### 使用
```html
<os-button>按钮一</os-button>
<os-button type="info">按钮二</os-button>
<os-button type="success">按钮三</os-button>
<os-button type="warning">按钮四</os-button>
<os-button type="error">按钮五</os-button>
<os-button type="text">按钮六</os-button>
```

### 禁用状态
按钮不可用 <br />
<template>
  <os-button disabled>按钮一</os-button>
  <os-button type="info" disabled>按钮二</os-button>
  <os-button type="success" disabled>按钮三</os-button>
  <os-button type="warning" disabled>按钮四</os-button>
  <os-button type="error" disabled>按钮五</os-button>
  <os-button type="text" disabled>按钮六</os-button>
</template>

```html
<os-button disabled>按钮一</os-button>
<os-button type="info" disabled>按钮二</os-button>
<os-button type="success" disabled>按钮三</os-button>
<os-button type="warning" disabled>按钮四</os-button>
<os-button type="error" disabled>按钮五</os-button>
<os-button type="text" disabled>按钮六</os-button>
```

### 尺寸
提供四种尺寸 <br />

<template>
  <os-button size="large">超大按钮</os-button>
  <os-button >默认按钮</os-button>
  <os-button size="small">小型按钮</os-button>
  <os-button size="mini">迷你按钮</os-button>
</template>

```html
  <os-button size="large">超大按钮</os-button>
  <os-button >默认按钮</os-button>
  <os-button size="small">小型按钮</os-button>
  <os-button size="mini">迷你按钮</os-button>
```

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。<br />

<template>
  <os-button icon="icon-edit"></os-button>
  <os-button icon="icon-delete"></os-button>
  <os-button icon="icon-search">搜索</os-button>
  <os-button>分享 <i class="iconfont icon-share" /></os-button>
</template>

```html
  <os-button icon="icon-edit"></os-button>
  <os-button icon="icon-delete"></os-button>
  <os-button icon="icon-search">搜索</os-button>
  <os-button>分享 <i class="iconfont icon-share" /></os-button>
```

### 圆角按钮
round属性用来设置圆角按钮 <br />

<template>
  <os-button size="large" round>超大按钮</os-button>
  <os-button round>默认按钮</os-button>
  <os-button size="small" round>小型按钮</os-button>
  <os-button size="mini" round>迷你按钮</os-button>
</template>

```html
  <os-button size="large" round>超大按钮</os-button>
  <os-button round>默认按钮</os-button>
  <os-button size="small" round>小型按钮</os-button>
  <os-button size="mini" round>迷你按钮</os-button>
```

### 圆形按钮
circle属性用来设置圆形按钮 <br />

<template>
  <os-button icon="icon-edit" size="large" circle></os-button>
  <os-button icon="icon-share" circle></os-button>
  <os-button icon="icon-delete" size="small" circle></os-button>
  <os-button icon="icon-search" size="mini" circle></os-button>
</template>

```html
  <os-button icon="icon-edit" size="large" circle></os-button>
  <os-button icon="icon-share" circle></os-button>
  <os-button icon="icon-delete" size="small" circle></os-button>
  <os-button icon="icon-search" size="mini" circle></os-button>
```

### loading
在按钮上显示加载状态。

<br />
<template>
  <os-button :loading="true">按钮一</os-button>
  <os-button :loading="true" type="info">按钮二</os-button>
  <os-button :loading="true" type="success">按钮三</os-button>
  <os-button :loading="true" type="warning">按钮四</os-button>
  <os-button :loading="true" type="error">按钮五</os-button>
  <os-button :loading="true" type="text">按钮六</os-button>
</template>

```html
  <os-button :loading="true">按钮一</os-button>
  <os-button :loading="true" type="info">按钮二</os-button>
  <os-button :loading="true" type="success">按钮三</os-button>
  <os-button :loading="true" type="warning">按钮四</os-button>
  <os-button :loading="true" type="error">按钮五</os-button>
  <os-button :loading="true" type="text">按钮六</os-button>
```

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值
|:-----------:|:-------------|:-------------|:-------------:|:-------------|
| size | 尺寸 | string | large/medium/small/mini | medium |
| type | 类型 | string | primary/success/warning/danger/info/text | primary |
| round | 是否圆角按钮 | boolean | -- | false |
| circle | 是否圆形按钮 | boolean | -- | false |
| loading | 是否加载中 | boolean | -- | false |
| disabled | 是否禁用 | boolean | -- | false |
| icon | 图标类名 | string | -- | -- |
