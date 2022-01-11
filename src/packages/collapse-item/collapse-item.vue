<template>
  <div class="my-collapse-item">
    <div
      class="my-collapse-item-title"
      :class="{ ['my-collapse-item-title-disabled']: disabled }"
      @click="handleExpand"
    >
      <slot name="title">
        {{ title }}
      </slot>
      <i
        class="my-collapse-item-icon iconfont icon-bottom"
        :class="{
          'my-collapse-item-icon-expand': expand
        }"
      />
    </div>
    <auto-height>
      <div class="my-collapse-item-wrap" v-show="expand" v-if="$slots.default">
        <div class="my-collapse-item-content">
          <slot></slot>
        </div>
      </div>
    </auto-height>
  </div>
</template>

<script>
import Emitter from "../../mixins/emitter";
import autoHeight from "../../animation/auto-height.vue";

export default {
  name: "MyCollapseItem",
  mixins: [Emitter],
  components: {
    autoHeight
  },
  data() {
    return {
      expand: false
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    name: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.dispatch("MyCollapse", "on-collapse-item-add", this);
  },
  beforeDestroy() {
    this.dispatch("MyCollapse", "on-collapse-item-remove", this);
  },
  methods: {
    handleExpand() {
      if (this.disabled) return;
      this.expand = !this.expand;
      this.dispatch("MyCollapse", "on-collapse-item-expand", this);
    }
  }
};
</script>
