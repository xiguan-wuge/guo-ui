<template>
  <div :class="['g-config-provider', className]" :style="cssVars">
    <slot></slot>
  </div>
</template>
<script>
import {createNameSpace, kebabCase} from 'utils/index.js';
const [name] = createNameSpace('configProvider');

export default {
  name,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    themeVar: {
      type: Object,
      default: () => {}
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    cssVars() {
      const varsObj = {}
      Object.keys(this.themeVar).forEach(key => {
        varsObj[`--g-${kebabCase(key)}`] = this.themeVar[key]
      })
      return varsObj
    }
  },
  // render() {
  //   return (
  //     <div class="g-config-provider">
  //       <span>this is  span</span>
  //     </div>
  //   )
  // }
}
</script>
