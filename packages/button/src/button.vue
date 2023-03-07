<template>
  <button class="g-button" @click="handleClick">
    <div class="g-button__content">
      <span v-if="value" class="g-button__text">{{value}}</span>
      <slot></slot>
    </div>
  </button>
</template>
<script>
import {createNameSpace} from 'utils/index.js'
const [name] = createNameSpace('button')
export default {
  name,
  props: {
    value: String
  },
  methods: {
    handleClick() {
      console.log('handleClick');
      this.$emit('click')
    }
  },
}
</script>
<style lang="less">
@import './button.less';
</style>