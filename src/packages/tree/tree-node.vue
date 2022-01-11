<template>
  <div class="my-tree-node" v-show="node.visible">
    <div class="my-tree-node-label">
      <span
        @click="handleExpand"
        class="my-tree-node-angle"
        :class="{ 'my-tree-node-angle-expand': node.expand }"
      >
        <i class="iconfont icon-arrow-right" v-if="showAngle" /> </span
      ><checkbox
        v-if="showCheckbox"
        v-model="node.checked"
        :indeterminate="node.indeterminate"
        :disabled="node.disabled"
        class="my-tree-node-checkbox"
        @change="handleCheck"
      /><span class="my-tree-node-loading" v-if="lazy && loading"
        ><i class="iconfont icon-loading"/></span
      ><span class="my-tree-node-text" @click="handleExpand">
        <node-content :node="node" />
      </span>
    </div>
    <auto-height>
      <div
        class="my-tree-node-content"
        v-if="node.children && node.children.length > 0 && rendered"
        v-show="node.expand"
      >
        <my-tree-node
          :show-checkbox="showCheckbox"
          v-for="item in node.children"
          :level="level + 1"
          :key="item.value"
          :node="item"
          :lazy="lazy"
          :load="load"
          :nodeKey="nodeKey"
        >
        </my-tree-node>
      </div>
    </auto-height>
  </div>
</template>

<script>
import { setNodeChecked } from "./utils";
import { deepCopy } from "../../utils/assist";
import autoHeight from "../../animation/auto-height.vue";
import checkbox from "../checkbox";

import Emitter from "../../mixins/emitter";

export default {
  name: "MyTreeNode",
  components: {
    autoHeight,
    checkbox,
    nodeContent: {
      props: {
        // 提供给用户自定义内容时的节点信息
        node: {
          required: true
        }
      },
      render(h) {
        const { tree } = this.$parent;
        // 1.有自定义的作用域插槽-执行作用域插槽
        const defaultSlot = tree.$scopedSlots.default;

        if (defaultSlot) {
          return defaultSlot({ node: this, data: this.node });
        }

        // 2.有自定义render函数时，执行自定义render
        const renderContent = tree.renderContent;
        if (renderContent) {
          return renderContent(h, { node: this, data: this.node });
        }

        // 否则直接显示label
        return h("span", this.node.label);
      }
    }
  },
  mixins: [Emitter],
  data() {
    return {
      // 是否渲染，只有第一次
      rendered: true,
      loading: false
    };
  },
  props: {
    // 节点数据
    node: {
      default() {
        return {};
      }
    },
    // 节点是否可以被选择
    showCheckbox: {
      type: Boolean,
      default: false
    },
    // 子节点是否为懒加载
    lazy: {
      type: Boolean,
      default: false
    },
    // 懒加载函数
    load: {
      type: Function
    },
    level: {
      type: Number
    },
    nodeKey: {
      type: String,
      default: "value"
    }
  },
  computed: {
    // 是否显示展开/收起按钮
    showAngle() {
      return (
        (this.lazy && !this.node.isLeaf) ||
        (this.node.children && this.node.children.length > 0)
      );
    }
  },
  watch: {
    "node.children": {
      handler(newVal) {
        if (newVal) {
          // 选中状态计算
          this.calcChecked(newVal);
          // 显示/隐藏状态计算
          this.calcVisible(newVal);
        }
      },
      deep: true
    }
  },
  created() {
    this.dispatch("MyTree", "on-tree-node-add", this);
  },
  methods: {
    /**
     * @description 是否需要展开
     */
    handleExpand() {
      // 按钮不存在或者正在loading时
      if (!this.showAngle || this.loading) {
        return;
      }

      if (this.lazy && !this.node.loaded) {
        this.loading = true;
        this.load(
          {
            level: this.level,
            ...this.node
          },
          data => {
            this.loading = false;
            this.node.loaded = true;
            // 空数据和空数组
            if (!data || data.length === 0) {
              this.$set(this.node, "isLeaf", true);
            } else {
              // 添加children属性
              this.$set(this.node, "children", deepCopy(data));
              if (this.node.checked) {
                this.handleCheck(true);
              }
              this.$nextTick(() => {
                this.$set(this.node, "expand", !this.node.expand);
              });
              this.dispatch("MyTree", "on-tree-node-expand", this);
            }
          }
        );
      } else {
        if (this.node.children && this.node.children.length > 0) {
          this.$set(this.node, "expand", !this.node.expand);
          this.dispatch("MyTree", "on-tree-node-expand", this);
        }
      }
    },
    /**
     * @description 是否被选中
     */
    handleCheck(checked) {
      this.$set(this.node, "checked", checked);
      this.dispatch("MyTree", "on-tree-node-check", this);

      // 处理自身及以下的选择状态
      setNodeChecked(this, this.node, checked);
    },
    /**
     * @description 选择状态计算
     */
    calcChecked(newVal) {
      // 全选判断
      const checkedAll = !newVal.some(item => !item.checked);
      // 不确定态判断
      const indeterminate = !!newVal.find(item => item.checked);

      // 全选状态下
      if (checkedAll) {
        this.$set(this.node, "checked", checkedAll);
        this.$set(this.node, "indeterminate", false);
      } else {
        this.$set(this.node, "checked", checkedAll);
        this.$set(this.node, "indeterminate", indeterminate);
      }
    },
    /**
     * @description 显示状态计算
     */
    calcVisible(newVal) {
      const visible = !!newVal.find(item => item.visible);

      this.$set(this.node, "visible", visible);
    }
  }
};
</script>
