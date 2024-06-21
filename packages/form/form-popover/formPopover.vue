<template>
  <el-popover
    title=""
    trigger="manual"
    :popper-class="'el-form-popover__error' + ' pop-tips--' + theme"
    :placement="placement"
    :width="width"
    :content="errorMsg"
    v-model="visible"
    @show="showPopover"
  >
    <template slot="reference">
      <slot></slot>
    </template>
  </el-popover>
</template>

<script>
let io = null;
export default {
  name: "ElFormPopover",
  inject: ["elFormItem"],
  data() {
    return {
      once: false,
      inputEl: null,
      visible: false,
      errorMsg: "",
      ioInstance: null,
    };
  },

  watch: {
    "elFormItem.validateMessage": {
      handler(newVal) {
        this.visible = !!newVal;
        if (this.refer) {
          this.hiddenPopOutside();
        }
        this.errorMsg = newVal;
        this.once = !this.errorMsg;
      },
    },
    "elFormItem.validateEventType": {
      handler(newVal) {
        console.log('validateEventType', newVal);
        if(newVal === 'blur') {
          console.log();
          if(this.trigger === 'foucs') {
            this.visible = false
          console.log('this.visible', this.visible);

          }
          
        } else if(newVal === 'blur') {
          if(this.errorMsg) {
            this.visible = true
          }
        }
      },
    },
  },

  props: {
    // hidden-after不为0时重新显示错误信息的触发方式
    trigger: {
      type: String,
      default: "",
    },

    // 出现位置 支持 top bottom right
    placement: {
      type: String,
      default: "left-start",
    },

    // 宽度 数值或者设置成auto等
    width: {
      type: Number | String,
      default: "auto",
    },

    // 主题 danger 以及light
    theme: {
      type: String,
      default: "danger",
    },

    // 多少秒后隐藏
    hiddenAfter: {
      type: Number,
      default: 0,
    },

    // 自动隐藏,当设置成hiddenAfter以及trigger时，以后事件触发后会不会再次自动隐藏
    autoHidden: {
      type: Boolean,
      default: false,
    },

    // refer 参考元素
    refer: {
      type: String,
      default: "",
    },

    // 开启交叉观察器
    openIo: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    console.log("moun");
    this.inputEl = this.$children[0].$children[0];
    if (this.refer) {
      this.hiddenPopOutside();
    }
    if (!this.hiddenAfter) {
      if (this.openIo) {
        io = new IntersectionObserver((entries) => {
          entries.forEach((item) => {
            if (item.intersectionRatio <= 0 && this.errorMsg) {
              this.visible = false;
            }
            if (item.intersectionRatio > 0 && this.errorMsg) {
              this.visible = true;
            }
          });
        });
        io.observe(this.inputEl.$el);
      }
    } else {
      this.inputOnFocus();
    }
  },

  beforeDestroy() {
    this.inputEl.$off(this.trigger);
    if (io) {
      io.unobserve(this.inputEl.$el);
    }
  },

  methods: {
    // 设置了过多少毫秒后需要监听focus事件来重新显示错误信息
    inputOnFocus() {
      // if(this.hiddenAfter){
      // 	this.inputEl = this.$children[0].$children[0]
      // 	this.inputEl.$el.addEventListener(this.trigger,()=>{
      // 		if(this.errorMsg){
      // 			this.visible = true
      // 			if(this.hiddenAfter && this.hiddenAfter>0){
      // 				setTimeout(()=>{
      // 					this.visible = false
      // 				},this.hiddenAfter)
      // 			}
      // 		}
      // 	})
      // }
      this.inputEl.$el.setAttribute('tabindex', 0)

      console.log("this.inputEl.$el", this.inputEl.$el);
      if (this.trigger) {
        this.inputEl.$el.addEventListener(this.trigger, () => {
          // console.log("foucs");
          // this.$nextTick(()=> {
          //   if (this.errorMsg) {
          //     // this.visible = true;
          //     // if (this.hiddenAfter && this.hiddenAfter > 0) {
          //     //   setTimeout(() => {
          //     //     this.visible = false;
          //     //   }, this.hiddenAfter);
          //     // }
          //   }
          // })
          
        });
        this.inputEl.$el.addEventListener("blur", () => {
          console.log("blur");
          this.visible = false;
        });
        this.$on('el.form.blur', () => {
          console.log("blur22");
          this.visible = false;
        });
      }
    },

    // 设置了参考元素，则隐藏在视野之外的气泡框
    hiddenPopOutside() {
      const referEl = document
        .querySelector(this.refer)
        .getBoundingClientRect();
      const slotEl = this.$slots.default[0].elm.getBoundingClientRect();
      const isVisible =
        referEl.top <= slotEl.top && slotEl.top <= referEl.bottom;
      if (!isVisible) {
        this.visible = false;
      }
    },

    showPopover() {
      if (this.hiddenAfter) {
        if (this.autoHidden) {
          setTimeout(() => {
            this.visible = false;
          }, this.hiddenAfter);
        } else {
          if (this.once === false) {
            setTimeout(() => {
              this.visible = false;
              this.once = true;
            }, this.hiddenAfter);
          }
        }
      }
    },
  },
};
</script>
<style>
.el-popover.el-form-popover__error {
  color: #f56c6c;
}
</style>
