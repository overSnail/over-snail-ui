---
title: Select 选择器
pageClass: os-page-class
---

# Select 选择器

### 基础用法

<p class="os-vuepress-my-p">
  适用广泛的基础单选
</p>

<template>
  <os-select v-model="value1">
    <os-option label="裁决之仗" :value="1"></os-option>
    <os-option label="骨玉权杖" :value="2"></os-option>
    <os-option label="龙纹剑" :value="3"></os-option>
    <os-option label="霸者之刃" :value="4"></os-option>
    <os-option label="血饮" :value="5"></os-option>
    <os-option label="逍遥扇" :value="6"></os-option>
  </os-select>
</template>
<p class="os-vuepress-my-p">
  v-model的值为当前被选中的option的 value 属性值
</p>

```vue
<template>
  <os-select v-model="value1">
    <os-option label="裁决之仗" :value="1"></os-option>
    <os-option label="骨玉权杖" :value="2"></os-option>
    <os-option label="龙纹剑" :value="3"></os-option>
    <os-option label="霸者之刃" :value="4"></os-option>
    <os-option label="血饮" :value="5"></os-option>
    <os-option label="逍遥扇" :value="6"></os-option>
  </os-select>
</template>

<script>
export default {
  data() {
    return {
      value1: ""
    };
  }
};
</script>
```

### 有禁用选项

<template>
  <os-select v-model="value2">
    <os-option label="裁决之仗" :value="1"></os-option>
    <os-option label="骨玉权杖" :value="2"></os-option>
    <os-option label="龙纹剑" :value="3"></os-option>
    <os-option label="霸者之刃" :value="4" disabled></os-option>
  </os-select>
</template>
<p class="os-vuepress-my-p">
  在option中，设定disabled值为 true，即可禁用该选项
</p>

```vue
<template>
  <os-select v-model="value2">
    <os-option label="裁决之仗" :value="1"></os-option>
    <os-option label="骨玉权杖" :value="2"></os-option>
    <os-option label="龙纹剑" :value="3"></os-option>
    <os-option label="霸者之刃" :value="4" disabled></os-option>
  </os-select>
</template>

<script>
export default {
  data() {
    return {
      value2: ""
    };
  }
};
</script>
```

### 禁用状态

<p class="os-vuepress-my-p">
  选择器不可用状态
</p>

<template>
  <os-select v-model="value3" disabled>
    <os-option label="裁决之仗" :value="1"></os-option>
    <os-option label="骨玉权杖" :value="2"></os-option>
    <os-option label="龙纹剑" :value="3"></os-option>
    <os-option label="霸者之刃" :value="4" ></os-option>
  </os-select>
</template>
<p class="os-vuepress-my-p">
  为select设置disabled属性，则整个选择器不可用
</p>

```vue
<template>
  <os-select v-model="value3" disabled>
    <os-option label="裁决之仗" :value="1"></os-option>
    <os-option label="骨玉权杖" :value="2"></os-option>
    <os-option label="龙纹剑" :value="3"></os-option>
    <os-option label="霸者之刃" :value="4"></os-option>
  </os-select>
</template>

<script>
export default {
  data() {
    return {
      value3: ""
    };
  }
};
</script>
```

### 可清空单选

<p class="os-vuepress-my-p">
  包含清空按钮，可将选择器清空为初始状态
</p>

<template>
  <os-select v-model="value4" clearable>
    <os-option label="裁决之仗" :value="1"></os-option>
    <os-option label="骨玉权杖" :value="2"></os-option>
    <os-option label="龙纹剑" :value="3"></os-option>
    <os-option label="霸者之刃" :value="4"></os-option>
  </os-select>
</template>
<p class="os-vuepress-my-p">
  为select设置clearable属性，则可将选择器清空。
</p>

```vue
<template>
  <os-select v-model="value4" clearable>
    <os-option label="裁决之仗" :value="1"></os-option>
    <os-option label="骨玉权杖" :value="2"></os-option>
    <os-option label="龙纹剑" :value="3"></os-option>
    <os-option label="霸者之刃" :value="4"></os-option>
  </os-select>
</template>

<script>
export default {
  data() {
    return {
      value4: ""
    };
  }
};
</script>
```

### 基础多选

<p class="os-vuepress-my-p">
  适用性较广的基础多选，用 Tag 展示已选项
</p>

<template>
  <os-select v-model="values" multiple filterable>
    <os-option label="裁决之仗" :value="1"></os-option>
    <os-option label="骨玉权杖" :value="2"></os-option>
    <os-option label="龙纹剑" :value="3"></os-option>
    <os-option label="霸者之刃" :value="4"></os-option>
  </os-select>
  <span>当前选择值：{{values}}</span>
</template>
<p class="os-vuepress-my-p">
  为select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。选中值会以 Tag 的形式展现。
</p>

```vue
<template>
  <os-select v-model="values" multiple filterable>
    <os-option label="裁决之仗" :value="1"></os-option>
    <os-option label="骨玉权杖" :value="2"></os-option>
    <os-option label="龙纹剑" :value="3"></os-option>
    <os-option label="霸者之刃" :value="4"></os-option>
  </os-select>
</template>

<script>
export default {
  data() {
    return {
      values: []
    };
  }
};
</script>
```

### 自定义模板

<p class="os-vuepress-my-p">
  可以自定义备选项
</p>

<template>
  <os-select v-model="value5" clearable>
    <os-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" >
      <span>{{item.label}}</span>
      <em style="color: #7ec699; float: right">{{item.type}}</em>
    </os-option>
  </os-select>
</template>
<p class="os-vuepress-my-p">
  将自定义的 HTML 模板插入 option 的 slot 中即可。
</p>

```vue
<template>
  <os-select v-model="value5" clearable>
    <os-option
      v-for="item in options"
      :key="item.value"
      :value="item.value"
      :label="item.label"
    >
      <span>{{ item.label }}</span>
      <em style="color: #7ec699; float: right">{{ item.type }}</em>
    </os-option>
  </os-select>
</template>

<script>
export default {
  data() {
    return {
      value5: "",
      options: [
        { label: "裁决之仗", type: "战士", value: 1 },
        { label: "骨玉权杖", type: "法师", value: 2 },
        { label: "龙纹剑", type: "道士", value: 3 },
        { label: "霸者之刃", type: "全职业", value: 4 }
      ]
    };
  }
};
</script>
```

### 分组

<p class="os-vuepress-my-p">
  备选项进行分组展示
</p>

<template>
  <os-select v-model="value6">
    <os-option-group v-for="item in equip" :key="item.value" :label="item.label">
      <os-option v-for="cell in item.list" :key="cell.value" :value="cell.value" :label="cell.label" />
    </os-option-group>
  </os-select>
</template>
<p class="os-vuepress-my-p">
  使用option-group对备选项进行分组，它的label属性为分组名
</p>

```vue
<template>
  <os-select v-model="value6">
    <os-option-group
      v-for="item in equip"
      :key="item.value"
      :label="item.label"
    >
      <os-option
        v-for="cell in item.list"
        :key="cell.value"
        :value="cell.value"
        :label="cell.label"
      />
    </os-option-group>
  </os-select>
</template>

<script>
export default {
  data() {
    return {
      value6: "",
      equip: [
        {
          label: "武器",
          value: "weapon",
          list: [
            { label: "裁决之仗", type: "战士", value: 1 },
            { label: "骨玉权杖", type: "法师", value: 2 },
            { label: "龙纹剑", type: "道士", value: 3 },
            { label: "霸者之刃", type: "全职业", value: 4 }
          ]
        },
        {
          label: "首饰",
          value: "ornaments",
          list: [
            { label: "力量戒指", type: "战士", value: 5 },
            { label: "龙之手镯", type: "法师", value: 6 },
            { label: "灵魂项链", type: "道士", value: 7 },
            { label: "降妖除魔戒指", type: "全职业", value: 8 }
          ]
        }
      ]
    };
  }
};
</script>
```

### 可搜索

<p class="os-vuepress-my-p">
  可以利用搜索功能快速查找选项
</p>

<template>
  <os-select v-model="value7" filterable>
    <os-option
      v-for="cell in filterOptions"
      :key="cell.value"
      :value="cell.value"
      :label="cell.label"
    />
  </os-select>
</template>
<p class="os-vuepress-my-p">
  为select添加filterable属性即可启用搜索功能。默认情况下，Select 会找出所有label属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个filter-method来实现。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。
</p>

```vue
<template>
  <os-select v-model="value7" filterable>
    <os-option
      v-for="cell in filterOptions"
      :key="cell.value"
      :value="cell.value"
      :label="cell.label"
    />
  </os-select>
</template>

<script>
export default {
  data() {
    return {
      value7: ""
    };
  }
};
</script>
```

### 远程搜索

<p class="os-vuepress-my-p">
  从服务器搜索数据，输入关键字进行查找
</p>

<template>
  <os-select v-model="value8" filterable remote :remote-method="asyncLoadOptions" :loading="loading">
    <os-option
      v-for="cell in asyncOptions"
      :key="cell.value"
      :value="cell.value"
      :label="cell.label"
    />
  </os-select>
</template>
<p class="os-vuepress-my-p">
  为了启用远程搜索，需要将filterable和remote设置为true，同时传入一个remote-method。remote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果option是通过v-for指令渲染出来的，此时需要为option添加key属性，且其值需具有唯一性，比如此例中的item.value。
</p>

```vue
<template>
  <os-select
    v-model="value8"
    filterable
    remote
    :remote-method="asyncLoadOptions"
    :loading="loading"
  >
    <os-option
      v-for="cell in asyncOptions"
      :key="cell.value"
      :value="cell.value"
      :label="cell.label"
    />
  </os-select>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      value8: "",
      asyncOptions: []
    };
  },
  methods: {
    asyncLoadOptions(queryString) {
      if (!queryString) {
        this.asyncOptions = [];
        return;
      }
      this.loading = true;
      const options = [
        { label: "裁决之仗", type: "战士", value: 1 },
        { label: "骨玉权杖", type: "法师", value: 2 },
        { label: "龙纹剑", type: "道士", value: 3 },
        { label: "霸者之刃", type: "全职业", value: 4 },
        { label: "力量戒指", type: "战士", value: 5 },
        { label: "龙之手镯", type: "法师", value: 6 },
        { label: "灵魂项链", type: "道士", value: 7 },
        { label: "降妖除魔戒指", type: "全职业", value: 8 },
        { label: "绿玉屠龙", type: "战士", value: 9 }
      ];

      setTimeout(() => {
        this.loading = false;
        this.asyncOptions = options.filter(
          d => d.label.indexOf(queryString) > -1
        );
      }, 444);
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
      loading: false,
      values: [],
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      options: [
        {label: "裁决之仗", type: "战士", value: 1},
        {label: "骨玉权杖", type: "法师", value: 2},
        {label: "龙纹剑", type: "道士", value: 3},
        {label: "霸者之刃", type: "全职业", value: 4},
      ],
      equip: [
        {
          label: "武器",
          value: "weapon",
          list: [
            {label: "裁决之仗", type: "战士", value: 1},
            {label: "骨玉权杖", type: "法师", value: 2},
            {label: "龙纹剑", type: "道士", value: 3},
            {label: "霸者之刃", type: "全职业", value: 4},
          ]
        },
        {
          label: "首饰",
          value: "ornaments",
          list: [
            {label: "力量戒指", type: "战士", value: 5},
            {label: "龙之手镯", type: "法师", value: 6},
            {label: "灵魂项链", type: "道士", value: 7},
            {label: "降妖除魔戒指", type: "全职业", value: 8},
          ]
        }
      ],
      filterOptions: [
        {label: "裁决之仗", type: "战士", value: 1},
        {label: "骨玉权杖", type: "法师", value: 2},
        {label: "龙纹剑", type: "道士", value: 3},
        {label: "霸者之刃", type: "全职业", value: 4},
      ],
      asyncOptions: []
    }
  },
  methods: {
    handleFilter(queryString) {
      this.filterOptions = [
        {label: "绿玉屠龙", type: "战士", value: 6}
      ]
    },
    asyncLoadOptions(queryString) {
      if(!queryString) {
        this.asyncOptions = [];
        return;
      }
      this.loading = true;
      const options = [
        {label: "裁决之仗", type: "战士", value: 1},
        {label: "骨玉权杖", type: "法师", value: 2},
        {label: "龙纹剑", type: "道士", value: 3},
        {label: "霸者之刃", type: "全职业", value: 4},
        {label: "力量戒指", type: "战士", value: 5},
        {label: "龙之手镯", type: "法师", value: 6},
        {label: "灵魂项链", type: "道士", value: 7},
        {label: "降妖除魔戒指", type: "全职业", value: 8},
        {label: "绿玉屠龙", type: "战士", value: 9}
      ]

      setTimeout(() => {
        this.loading = false;
        this.asyncOptions = options.filter(d => d.label.indexOf(queryString) > -1);
      }, 444)
    }
  }
}
</script>

### Select 属性

|      参数       | 说明                            | 类型                        |         可选值          | 默认值 |
| :-------------: | :------------------------------ | :-------------------------- | :---------------------: | :----- |
| value / v-model | 绑定值                          | boolean/string/number/array |           --            | --     |
|    multiple     | 是否多选                        | boolean                     |           --            | false  |
|    disabled     | 是否禁用                        | boolean                     |           --            | false  |
|      size       | 尺寸                            | string                      | large/medium/small/mini | medium |
|    clearable    | 是否可以清空选项                | boolean                     |           --            | false  |
| multiple-limit  | 多选时的数量限制，为 0 则不限制 | number                      |           --            | 0      |
|   placeholder   | 占位符                          | string                      |           --            | 请选择 |
|   filterable    | 是否可搜索                      | boolean                     |           --            | false  |
|  filter-method  | 自定义搜索方法                  | function                    |           --            | --     |
|     remote      | 是否为远程搜索                  | boolean                     |           --            | false  |
|  remote-method  | 远程搜索方法                    | function                    |           --            | --     |
|     loading     | 是否正在从远程获取数据          | boolean                     |           --            | false  |

### Select 事件

|    事件名称    | 说明                                     | 回调参数                      |
| :------------: | :--------------------------------------- | :---------------------------- |
|     change     | 选中值发生变化时触发                     | 目前的选中值                  |
| visible-change | 下拉框出现/隐藏时触发                    | 出现则为 true，隐藏则为 false |
|   remove-tag   | 多选模式下移除 tag 时触发                | 移除的 tag 值                 |
|     clear      | 可清空的单选模式下用户点击清空按钮时触发 | --                            |
|      blur      | 当 input 失去焦点时触发                  | (event: Event)                |
|     focus      | 当 input 获得焦点时触发                  | (event: Event)                |

### Option Group 属性

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| :---: | :--------- | :----- | :----: | :----- |
| label | 分组的组名 | string |   --   | --     |

### Option 属性

|   参数   | 说明           | 类型          | 可选值 | 默认值 |
| :------: | :------------- | :------------ | :----: | :----- |
|  value   | 选项的值       | string/number |   --   | --     |
|  label   | 选项的标签     | string/number |   --   | --     |
| disabled | 是否禁用该选项 | boolean       |   --   | false  |
