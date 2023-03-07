<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <g-button @click="handleButtonClick" :value="buttonValue">buttonValue</g-button>
    <g-tag></g-tag>
    <g-slider></g-slider>
    <button @click="toggleTheme">切换主题：{{theme}}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      theme: 'default',
      buttonValue: ''
    }
  },
  mounted() {
    this.htmlEl = document.documentElement
    console.log('htmlEl', this.htmlEl);
    // 监听 orientation changes
//     window.addEventListener("orientationchange", function(event) {
//       console.log('event111', event)
//     // 根据event.orientation|screen.orientation.angle等于0|180、90|-90度来判断横竖屏
//     }, false);

//     var eventType = 'orientationchange';
// // 触发原生orientationchange
// const win = window
// var fire = function() {
//   var e;
//   if (document.createEvent) {
//     e = document.createEvent('HTMLEvents');
//     e.initEvent(eventType, true, false);
//     win.dispatchEvent(e);
//   } else {
//     e = document.createEventObject();
//     e.eventType = eventType;
//     if (win[eventType]) {
//       win[eventType]();
//     } else if (win['on' + eventType]) {
//       win['on' + eventType]();
//     } else {
//       win.fireEvent(eventType, e);
//     }
//   }
// }
// fire()




  },
  methods: {
    handleButtonClick() {
      console.log('handleButtonClick')
    },
    toggleTheme() {
      this.theme = this.theme === 'default' ? 'dark' : 'default'
      console.log('切换主题', this.theme);
      this.htmlEl.setAttribute('data-theme', this.theme)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
