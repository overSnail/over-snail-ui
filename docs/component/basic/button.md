---
title: Button 按钮
---

# 按钮

<template>
  <my-button>按钮一</my-button>
  <my-button type="info">按钮二</my-button>
  <my-button type="success">按钮三</my-button>
  <my-button type="warning">按钮四</my-button>
  <my-button type="error">按钮五</my-button>
  <my-button type="text">按钮六</my-button>
</template>


### 使用
```html
<my-button>按钮一</my-button>
<my-button type="info">按钮二</my-button>
<my-button type="success">按钮三</my-button>
<my-button type="warning">按钮四</my-button>
<my-button type="error">按钮五</my-button>
<my-button type="text">按钮六</my-button>
```

### 禁用状态
按钮不可用 <br />
<template>
  <my-button disabled>按钮一</my-button>
  <my-button type="info" disabled>按钮二</my-button>
  <my-button type="success" disabled>按钮三</my-button>
  <my-button type="warning" disabled>按钮四</my-button>
  <my-button type="error" disabled>按钮五</my-button>
  <my-button type="text" disabled>按钮六</my-button>
</template>

```html
<my-button disabled>按钮一</my-button>
<my-button type="info" disabled>按钮二</my-button>
<my-button type="success" disabled>按钮三</my-button>
<my-button type="warning" disabled>按钮四</my-button>
<my-button type="error" disabled>按钮五</my-button>
<my-button type="text" disabled>按钮六</my-button>
```

### 尺寸
提供四种尺寸 <br />

<template>
  <my-button size="large">超大按钮</my-button>
  <my-button >默认按钮</my-button>
  <my-button size="small">小型按钮</my-button>
  <my-button size="mini">迷你按钮</my-button>
</template>

```html
  <my-button size="large">超大按钮</my-button>
  <my-button >默认按钮</my-button>
  <my-button size="small">小型按钮</my-button>
  <my-button size="mini">迷你按钮</my-button>
```

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。<br />

<template>
  <my-button icon="icon-edit"></my-button>
  <my-button icon="icon-delete"></my-button>
  <my-button icon="icon-search">搜索</my-button>
  <my-button>分享 <i class="iconfont icon-share" /></my-button>
</template>

```html
  <my-button icon="icon-edit"></my-button>
  <my-button icon="icon-delete"></my-button>
  <my-button icon="icon-search">搜索</my-button>
  <my-button>分享 <i class="iconfont icon-share" /></my-button>
```

### 圆角按钮
round属性用来设置圆角按钮 <br />

<template>
  <my-button size="large" round>超大按钮</my-button>
  <my-button round>默认按钮</my-button>
  <my-button size="small" round>小型按钮</my-button>
  <my-button size="mini" round>迷你按钮</my-button>
</template>

```html
  <my-button size="large" round>超大按钮</my-button>
  <my-button round>默认按钮</my-button>
  <my-button size="small" round>小型按钮</my-button>
  <my-button size="mini" round>迷你按钮</my-button>
```

### 圆形按钮
circle属性用来设置圆形按钮 <br />

<template>
  <my-button icon="icon-edit" size="large" circle></my-button>
  <my-button icon="icon-share" circle></my-button>
  <my-button icon="icon-delete" size="small" circle></my-button>
  <my-button icon="icon-search" size="mini" circle></my-button>
</template>

```html
  <my-button icon="icon-edit" size="large" circle></my-button>
  <my-button icon="icon-share" circle></my-button>
  <my-button icon="icon-delete" size="small" circle></my-button>
  <my-button icon="icon-search" size="mini" circle></my-button>
```

### loading
在按钮上显示加载状态。

<br />
<template>
  <my-button :loading="true">按钮一</my-button>
  <my-button :loading="true" type="info">按钮二</my-button>
  <my-button :loading="true" type="success">按钮三</my-button>
  <my-button :loading="true" type="warning">按钮四</my-button>
  <my-button :loading="true" type="error">按钮五</my-button>
  <my-button :loading="true" type="text">按钮六</my-button>
</template>

```html
  <my-button :loading="true">按钮一</my-button>
  <my-button :loading="true" type="info">按钮二</my-button>
  <my-button :loading="true" type="success">按钮三</my-button>
  <my-button :loading="true" type="warning">按钮四</my-button>
  <my-button :loading="true" type="error">按钮五</my-button>
  <my-button :loading="true" type="text">按钮六</my-button>
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
