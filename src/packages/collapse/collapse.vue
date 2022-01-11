<template>
  <div class="my-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from "../../mixins/emitter";

export default {
  name: "MyCollapse",
  mixins: [Emitter],
  data() {
    return {
      items: []
    };
  },
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    // 值绑定
    value: {
      type: [String, Number, Array]
    }
  },
  watch: {
    value: {
      handler() {
        this.resolveItemState();
      },
      immediate: true
    }
  },
  created() {
    // 子组件挂载时保存实例
    this.$on("on-collapse-item-add", collapseItem => {
      this.items.push(collapseItem);
      this.resolveItemState();
    });

    // 子组件移除时移除实例
    this.$on("on-collapse-item-remove", collapseItem => {
      this.items.splice(this.items.indexOf(collapseItem), 1);
    });

    this.$on("on-collapse-item-expand", collapseItem => {
      this.emitValue(collapseItem);
    });
  },
  methods: {
    /**
     * @description 参数状态同步
     */
    resolveItemState() {
      this.items.forEach(cell => {
        cell.expand = Array.isArray(this.value)
          ? this.value.includes(cell.name)
          : this.value === cell.name;
      });

      // if (Array.isArray(this.value)) {
      //   this.items.forEach(cell => {
      //     cell.expand = this.value.includes(cell.name);
      //   });
      // } else {

      // }
    },
    emitValue(collapseItem) {
      if (this.accordion) {
        this.$emit("input", collapseItem.expand ? collapseItem.name : "");
      } else {
        const value = this.items.reduce((total, cell) => {
          cell.expand && total.push(cell.name);
          return total;
        }, []);

        this.$emit("input", value);
      }
    }
  }
};
</script>
