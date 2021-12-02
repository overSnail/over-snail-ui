<template>
  <div
    class="my-dialog"
    :class="{ 'my-dialog-show': visible }"
    :style="{ 'z-index': zIndex }"
    @click.self="handleClickMask"
  >
    <transition
      name="messagebox-fade"
      @after-enter="$emit('opend')"
      @after-leave="$emit('closed')"
    >
      <div
        class="my-dialog-wrap"
        v-show="visible"
        :style="{ width: width, 'margin-top': top }"
      >
        <!-- 标题区 -->
        <div class="my-dialog-wrap-title">
          <slot name="title">{{ title }}</slot>
          <i
            class="iconfont icon-close my-dialog-wrap-close-btn"
            v-if="showClose"
            @click="handleClose"
          />
        </div>
        <!-- 内容区域 -->
        <div class="my-dialog-wrap-content" v-if="rendered">
          <slot>
            风华绝代四个非公开给
          </slot>
        </div>

        <div class="my-dialog-wrap-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MyDialog",
  data() {
    return {
      // mask的层级，会随着每次点击而累加
      zIndex: 2000,
      // 是否已经渲染，该属性用来控制
      rendered: false
    };
  },
  props: {
    // 是否可见
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "标题"
    },
    // 是否可以通过按下ESC键来关闭弹窗
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    // 弹框的宽度
    width: {
      type: String,
      default: "50%"
    },
    // Dialog CSS 中的 margin-top 值
    top: {
      type: String,
      default: "15vh"
    },
    // 关闭前的回调
    beforeClose: {
      type: Function
    },
    // 是否将元素挂到body上
    appendToBody: {
      type: Boolean,
      default: true
    },
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.rendered = true;
        this.$emit("open");
        this.zIndex = this.$osUI ? this.$osUI.zIndex++ : this.zIndex++;
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        this.$emit("close");
      }
    }
  },
  mounted() {
    window.addEventListener("keydown", this.handleCloseByEsc);
  },
  methods: {
    handleClickMask() {
      this.handleClose();
    },
    /**
     * @description 关闭函数,如果存在关闭前回调，则暂停关闭操作。
     */
    handleClose() {
      if (typeof this.beforeClose === "function") {
        this.beforeClose(() => {
          this.$emit("update:visible", false);
          this.$emit("close");
        });
      } else {
        this.$emit("update:visible", false);
        this.$emit("close");
      }
    },
    /**
     * @description 按键esc关闭当前弹窗
     */
    handleCloseByEsc(event) {
      if (event.keyCode === 27 && this.closeOnPressEscape && this.visible) {
        this.handleClose();
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleCloseByEsc);
  }
};
</script>
