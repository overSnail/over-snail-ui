---
title: Tree 树形控件
pageClass: os-page-class
---

# Tree 树形控件

<p class="os-vuepress-my-p">
  用清晰的层级结构展示信息，可展开或折叠。
</p>

### 基础用法

<p class="os-vuepress-my-p">
  基础的树形结构展示。
</p>

<template>
  <os-tree :data="treeData1" />
</template>

```vue
<template>
  <os-tree :data="treeData1" />
</template>

<script>
export default {
  data() {
    return {
      treeData1: [
        {
          label: "节点 1",
          value: 1,
          children: [
            {
              label: "节点 11",
              value: 11,
              children: [
                { label: "节点 111", value: 111 },
                { label: "节点 112", value: 112 },
                { label: "节点 113", value: 113 }
              ]
            },
            { label: "节点 12", value: 12 },
            { label: "节点 13", value: 13 },
            { label: "节点 14", value: 14 }
          ]
        },
        {
          label: "节点 2",
          value: 2,
          children: [
            { label: "节点 21", value: 21 },
            { label: "节点 22", value: 22 },
            { label: "节点 23", value: 23 },
            { label: "节点 24", value: 24 }
          ]
        }
      ]
    };
  }
};
</script>
```

### 可选择

<p class="os-vuepress-my-p">
  适用于需要选择层级时使用。
</p>

<template>
  <os-tree :data="treeData2" show-checkbox />
</template>

```vue
<template>
  <os-tree :data="treeData2" show-checkbox />
</template>

<script>
export default {
  data() {
    return {
      treeData2: [
        {
          label: "节点 1",
          value: 1,
          children: [
            {
              label: "节点 11",
              value: 11,
              children: [
                { label: "节点 111", value: 111 },
                { label: "节点 112", value: 112 },
                { label: "节点 113", value: 113 }
              ]
            },
            { label: "节点 12", value: 12 },
            { label: "节点 13", value: 13 },
            { label: "节点 14", value: 14 }
          ]
        },
        {
          label: "节点 2",
          value: 2,
          children: [
            { label: "节点 21", value: 21 },
            { label: "节点 22", value: 22 },
            { label: "节点 23", value: 23 },
            { label: "节点 24", value: 24 }
          ]
        }
      ]
    };
  }
};
</script>
```

### 懒加载自定义叶子节点

<p class="os-vuepress-my-p">
</p>

<template>
  <os-tree show-checkbox lazy :load="loadNode"/>
</template>

<p class="os-vuepress-my-p">
  由于在点击节点时才进行该层数据的获取，默认情况下 Tree 无法预知某个节点是否为叶子节点，所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。同时，你也可以提前告知 Tree 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。
</p>

```vue
<template>
  <os-tree show-checkbox lazy :load="loadNode" />
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    loadNode(node, resolve) {
      let data = [];

      if (node.level === 0) {
        data = [
          { label: "节点 1", value: 1 },
          { label: "节点 2", value: 2, isLeaf: true }
        ];
        resolve(data);
      } else if (node.level === 1) {
        data = [
          { label: "节点 11", value: 11 },
          { label: "节点 12", value: 12, isLeaf: true }
        ];
        setTimeout(() => {
          resolve(data);
        }, 1555);
      } else if (node.level === 2) {
        setTimeout(() => {
          resolve([]);
        }, 1555);
      }
    }
  }
};
</script>
```

### 默认展开和默认选中

<p class="os-vuepress-my-p">
  可将 Tree 的某些节点设置为默认展开或默认选中
</p>

<template>
  <os-tree
   :data="treeData3"
   show-checkbox
   node-key="value"
   :default-expanded-keys="[2]"
   :default-checked-keys="[13, 23]"
  />
</template>

```vue
<template>
  <os-tree
    :data="treeData3"
    show-checkbox
    node-key="value"
    :default-expanded-keys="[2]"
    :default-checked-keys="[13, 23]"
  />
</template>

<script>
export default {
  data() {
    return {
      treeData3: [
        {
          label: "节点 1",
          value: 1,
          children: [
            {
              label: "节点 11",
              value: 11,
              children: [
                { label: "节点 111", value: 111 },
                { label: "节点 112", value: 112 },
                { label: "节点 113", value: 113 }
              ]
            },
            { label: "节点 12", value: 12 },
            { label: "节点 13", value: 13 },
            { label: "节点 14", value: 14 }
          ]
        },
        {
          label: "节点 2",
          value: 2,
          children: [
            { label: "节点 21", value: 21 },
            { label: "节点 22", value: 22 },
            { label: "节点 23", value: 23 },
            { label: "节点 24", value: 24 }
          ]
        }
      ]
    };
  }
};
</script>
```

### 禁用状态

<p class="os-vuepress-my-p">
  可将 Tree 的某些节点设置为禁用状态
</p>

<template>
  <os-tree
   :data="treeData4"
   show-checkbox
   node-key="value"
   :default-expanded-keys="[2]"
   :default-checked-keys="[13, 21, 111]"
  />
</template>
<p class="os-vuepress-my-p">
  通过disabled设置禁用状态。
</p>

```vue
<template>
  <os-tree
    :data="treeData4"
    show-checkbox
    node-key="value"
    :default-expanded-keys="[2]"
    :default-checked-keys="[13, 21, 111]"
  />
</template>

<script>
export default {
  data() {
    return {
      treeData4: [
        {
          label: "节点 1",
          value: 1,
          children: [
            {
              label: "节点 11",
              value: 11,
              children: [
                { label: "节点 111", value: 111, disabled: true },
                { label: "节点 112", value: 112 },
                { label: "节点 113", value: 113 }
              ]
            },
            { label: "节点 12", value: 12 },
            { label: "节点 13", value: 13 },
            { label: "节点 14", value: 14 }
          ]
        },
        {
          label: "节点 2",
          value: 2,
          disabled: true,
          children: [
            { label: "节点 21", value: 21, disabled: true },
            { label: "节点 22", value: 22 },
            { label: "节点 23", value: 23 },
            { label: "节点 24", value: 24 }
          ]
        }
      ]
    };
  }
};
</script>
```

### 树节点的选择

<p class="os-vuepress-my-p" />
<template>
  <os-tree
   :data="treeData5"
   show-checkbox
   node-key="value"
   :default-expanded-keys="[1,2,11]"
   ref="myTree"
  />
  <p class="os-vuepress-my-p">当前选择：{{ checkedVal  }}</p>
  <os-button type="info" @click="getCheckedNodes">通过 node 获取</os-button>
  <os-button type="info" @click="getCheckedKeys">通过 key 获取</os-button>
  <os-button type="info" @click="setCheckedNodes">通过 node 设置</os-button>
  <os-button type="info" @click="setCheckedKeys">通过 key 设置</os-button>
  <os-button type="info" @click="resetChecked">清空</os-button>
</template>
<p class="os-vuepress-my-p">
  本例展示如何获取和设置选中节点。获取和设置各有两种方式：通过 node 或通过 key。如果需要通过 key 来获取或设置，则必须设置node-key。
</p>

```vue
<template>
  <os-tree :data="treeData5" show-checkbox node-key="value" ref="myTree" />
</template>

<script>
export default {
  data() {
    return {
      checkedVal: [],
      treeData5: [
        {
          label: "节点 1",
          value: 1,
          children: [
            {
              label: "节点 11",
              value: 11,
              children: [
                { label: "节点 111", value: 111 },
                { label: "节点 112", value: 112 },
                { label: "节点 113", value: 113 }
              ]
            },
            { label: "节点 12", value: 12 },
            { label: "节点 13", value: 13 },
            { label: "节点 14", value: 14 }
          ]
        },
        {
          label: "节点 2",
          value: 2,
          children: [
            { label: "节点 21", value: 21 },
            { label: "节点 22", value: 22 },
            { label: "节点 23", value: 23 },
            { label: "节点 24", value: 24 }
          ]
        }
      ]
    };
  },
  methods: {
    getCheckedNodes() {
      this.checkedVal = this.$refs.myTree.getCheckedNodes();
    },
    getCheckedKeys() {
      this.checkedVal = this.$refs.myTree.getCheckedKeys();
    },
    setCheckedNodes() {
      this.$refs.myTree.setCheckedNodes([
        { value: 112, label: "节点 112" },
        { value: 113, label: "节点 113" },
        { value: 2, label: "节点 2" }
      ]);
    },
    setCheckedKeys() {
      this.$refs.myTree.setCheckedKeys([11, 13, 24]);
    },
    resetChecked() {
      this.$refs.myTree.setCheckedKeys([]);
    }
  }
};
</script>
```

### 自定义节点内容

<p class="os-vuepress-my-p">
  节点的内容支持自定义，可以在节点区添加按钮或图标等内容
</p>

<template>
  <div class="costom-tree-container">
    <div class="tree-block">
      <p>使用 render-content</p>
      <os-tree
        :data="treeData2"
        show-checkbox
        :render-content="renderContent"
      />
    </div>
    <div class="tree-block">
      <p>使用 scoped slot</p>
      <os-tree :data="treeData2" show-checkbox>
        <span class="custom-tree-node" slot-scope="{ node, data }">
          {{ data.label }}<em style="color: green">({{ data.value }})</em>
        </span>
      </os-tree>
    </div>
  </div>
</template>
<p class="os-vuepress-my-p">
  可以通过两种方法进行树节点内容的自定义：render-content和 scoped slot。使用render-content指定渲染函数，该函数返回需要的节点区内容即可。渲染函数的用法请参考 Vue 文档。使用 scoped slot 会传入两个参数node和data，分别表示当前节点的 Node 对象和当前节点的数据。
</p>

```vue
<template>
  <div class="costom-tree-container">
    <div class="tree-block">
      <p>使用 render-content</p>
      <os-tree
        :data="treeData2"
        show-checkbox
        :render-content="renderContent"
      />
    </div>
    <div class="tree-block">
      <p>使用 scoped slot</p>
      <os-tree :data="treeData2" show-checkbox>
        <span class="custom-tree-node" slot-scope="{ node, data }">
          {{ data.label }}<em style="color: green">({{ data.value }})</em>
        </span>
      </os-tree>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      treeData2: [
        {
          label: "节点 1",
          value: 1,
          children: [
            {
              label: "节点 11",
              value: 11,
              children: [
                { label: "节点 111", value: 111 },
                { label: "节点 112", value: 112 },
                { label: "节点 113", value: 113 }
              ]
            },
            { label: "节点 12", value: 12 },
            { label: "节点 13", value: 13 },
            { label: "节点 14", value: 14 }
          ]
        },
        {
          label: "节点 2",
          value: 2,
          children: [
            { label: "节点 21", value: 21 },
            { label: "节点 22", value: 22 },
            { label: "节点 23", value: 23 },
            { label: "节点 24", value: 24 }
          ]
        }
      ]
    };
  },
  methods: {
    renderContent(h, { node, data }) {
      return (
        <span class="custom-tree-node">
          <span>{data.label}</span>
          <span style="color: green">({data.value})</span>
        </span>
      );
    }
  }
};
</script>
```

### 节点过滤

<p class="os-vuepress-my-p">
  通过关键字过滤树节点
</p>

<template>
  <div>
    <os-input v-model="filterVal" clearable />
    <os-tree
      :data="treeData4"
      node-key="value"
      ref="filterTree"
      :default-expanded-keys="[1, 2, 11]"
      :filter-node-method="treeNodeFilter"
    />
  </div>
  
</template>
<p class="os-vuepress-my-p">
  在需要对节点进行过滤时，调用 Tree 实例的filter方法，参数为关键字。需要注意的是，此时需要设置filter-node-method，值为过滤函数。
</p>

```vue
<template>
  <div>
    <os-input v-model="filterVal" clearable />
    <os-tree
      :data="treeData4"
      node-key="value"
      ref="filterTree"
      :default-expanded-keys="[1, 2, 11]"
      :filter-node-method="treeNodeFilter"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      treeData4: [
        {
          label: "节点 1",
          value: 1,
          children: [
            {
              label: "节点 11",
              value: 11,
              children: [
                { label: "节点 111", value: 111, disabled: true },
                { label: "节点 112", value: 112 },
                { label: "节点 113", value: 113 }
              ]
            },
            { label: "节点 12", value: 12 },
            { label: "节点 13", value: 13 },
            { label: "节点 14", value: 14 }
          ]
        },
        {
          label: "节点 2",
          value: 2,
          disabled: true,
          children: [
            { label: "节点 21", value: 21, disabled: true },
            { label: "节点 22", value: 22 },
            { label: "节点 23", value: 23 },
            { label: "节点 24", value: 24 }
          ]
        }
      ]
    };
  },
  watch: {
    filterVal(newVal) {
      this.$refs.filterTree.filter(newVal);
    }
  },
  methods: {
    treeNodeFilter(value, data) {
      if (value) {
        return data.label.indexOf(value) > -1;
      } else {
        return true;
      }
    }
  }
};
</script>
```

### todo: 可拖拽节点

<!-- 以下为运行时代码 -->
<script>
  export default {
    data() {
      return {
        // 过滤值
        filterVal: "",
        // 被选中的节点
        checkedVal: [],
        treeData1: [
          {
            label: "节点 1",
            value: 1,
            children: [
              {
                label: "节点 11",
                value: 11,
                children: [
                  {label: "节点 111", value: 111},
                  {label: "节点 112", value: 112},
                  {label: "节点 113", value: 113},
                ]
              },
              {label: "节点 12", value: 12},
              {label: "节点 13", value: 13},
              {label: "节点 14", value: 14},
            ]
          },
          {
            label: "节点 2",
            value: 2,
            children: [
              {label: "节点 21", value: 21},
              {label: "节点 22", value: 22},
              {label: "节点 23", value: 23},
              {label: "节点 24", value: 24},
            ]
          }
        ],
        treeData2: [
          {
            label: "节点 1",
            value: 1,
            children: [
              {
                label: "节点 11",
                value: 11,
                children: [
                  {label: "节点 111", value: 111},
                  {label: "节点 112", value: 112},
                  {label: "节点 113", value: 113},
                ]
              },
              {label: "节点 12", value: 12},
              {label: "节点 13", value: 13},
              {label: "节点 14", value: 14},
            ]
          },
          {
            label: "节点 2",
            value: 2,
            children: [
              {label: "节点 21", value: 21},
              {label: "节点 22", value: 22},
              {label: "节点 23", value: 23},
              {label: "节点 24", value: 24},
            ]
          }
        ],
        treeData3: [
          {
            label: "节点 1",
            value: 1,
            children: [
              {
                label: "节点 11",
                value: 11,
                children: [
                  {label: "节点 111", value: 111},
                  {label: "节点 112", value: 112},
                  {label: "节点 113", value: 113},
                ]
              },
              {label: "节点 12", value: 12},
              {label: "节点 13", value: 13},
              {label: "节点 14", value: 14},
            ]
          },
          {
            label: "节点 2",
            value: 2,
            children: [
              {label: "节点 21", value: 21},
              {label: "节点 22", value: 22},
              {label: "节点 23", value: 23},
              {label: "节点 24", value: 24},
            ]
          }
        ],
        treeData4: [
          {
            label: "节点 1",
            value: 1,
            children: [
              {
                label: "节点 11",
                value: 11,
                children: [
                  { label: "节点 111", value: 111, disabled: true },
                  { label: "节点 112", value: 112 },
                  { label: "节点 113", value: 113, disabled: true }
                ]
              },
              { label: "节点 12", value: 12 },
              { label: "节点 13", value: 13 },
              { label: "节点 14", value: 14 }
            ]
          },
          {
            label: "节点 2",
            value: 2,
            disabled: true,
            children: [
              { label: "节点 21", value: 21, disabled: true },
              { label: "节点 22", value: 22 },
              { label: "节点 23", value: 23 },
              { label: "节点 24", value: 24 }
            ]
          }
        ],
        treeData5: [
          {
            label: "节点 1",
            value: 1,
            children: [
              {
                label: "节点 11",
                value: 11,
                children: [
                  {label: "节点 111", value: 111},
                  {label: "节点 112", value: 112},
                  {label: "节点 113", value: 113},
                ]
              },
              {label: "节点 12", value: 12},
              {label: "节点 13", value: 13},
              {label: "节点 14", value: 14},
            ]
          },
          {
            label: "节点 2",
            value: 2,
            children: [
              {label: "节点 21", value: 21},
              {label: "节点 22", value: 22},
              {label: "节点 23", value: 23},
              {label: "节点 24", value: 24},
            ]
          }
        ]
      }
    },
    watch: {
      filterVal(newVal) {
        this.$refs.filterTree.filter(newVal);
      }
    },
    methods: {
      treeNodeFilter(value, data) {
        if (value) {
          return data.label.indexOf(value) > -1
        } else {
          return true
        }
      },

      loadNode(node, resolve) {
        let data = [];

        if (node.level === 0) {
          data = [
            { label: "节点 1", value: 1 },
            { label: "节点 2", value: 2, isLeaf: true },
          ]
          resolve(data)
        } else 
        if (node.level === 1) {
          data = [
            { label: "节点 11", value: 11 },
            { label: "节点 12", value: 12, isLeaf: true },
          ]
          setTimeout(() => {
            resolve(data)
          }, 1555)
        } else
        if (node.level === 2) {
          setTimeout(() => {
            resolve([])
          }, 1555)
        }
      },
      getCheckedNodes() {
        this.checkedVal = this.$refs.myTree.getCheckedNodes();
      },
      getCheckedKeys() {
        this.checkedVal = this.$refs.myTree.getCheckedKeys();
      },
      setCheckedNodes() {
        this.$refs.myTree.setCheckedNodes([
          {value: 112, label: "节点 112"},
          {value: 113, label: "节点 113"},
          {value: 2, label: "节点 2"},
        ])
      },
      setCheckedKeys() {
        this.$refs.myTree.setCheckedKeys([11, 13, 24]);
      },
      resetChecked() {
        this.$refs.myTree.setCheckedKeys([]);
      },
      renderContent(h, { node, data }) {
        return (
          <span class="custom-tree-node">
            <span>{data.label}</span>
            <span style="color: green">
              ({data.value})
            </span>
          </span>);
      }
    }
  }
  
</script>

### Tree 属性

|         参数         | 说明                                                                                            | 类型                        | 可选值 | 默认值   |
| :------------------: | :---------------------------------------------------------------------------------------------- | :-------------------------- | :----: | :------- |
|         data         | 展示数据                                                                                        | array                       |   --   | --       |
|      empty-text      | 内容为空的时候展示的文本                                                                        | string                      |   --   | 暂无数据 |
|       node-key       | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的                                            | string                      |   --   | value    |
|         load         | 加载子树数据的方法，仅当 lazy 属性为 true 时生效                                                | function(node, resolve)     |   --   | --       |
|    render-content    | 树节点的内容区的渲染 Function                                                                   | function(h, { node, data }) |   --   | --       |
|    show-checkbox     | 节点是否可被选择                                                                                | boolean                     |   --   | false    |
| default-checked-keys | 默认勾选的节点的 key 的数组                                                                     | array                       |   --   | --       |
|  filter-node-method  | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏 | function(value, data, node) |   --   | --       |
|         lazy         | 是否懒加载子节点，需与 load 方法结合使用                                                        | boolean                     |   --   | false    |
