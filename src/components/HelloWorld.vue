<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <g-button @click="handleButtonClick" :value="buttonValue">buttonValue</g-button>
    <g-tag></g-tag>
    <g-slider></g-slider>
    <p>configProvider包装button:</p>
    <g-config-provider :themeVar="buttonTheme" className="config-p config-p2">
      <g-button>inner Button</g-button>
    </g-config-provider>
    <button @click="toggleTheme('')">切换主题：{{theme}}</button>
    <br>
    <button @click="toggleTheme('green')">切换自定义主题green：{{theme}}</button>
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
  created() {
    this.buttonTheme = {
      buttonColor: 'blue'
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
    toggleTheme(theme) {
      if(theme) {
        this.theme = theme
      } else {
        this.theme = this.theme === 'default' ? 'dark' : 'default'
      }
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
.config-p {
  display: inline-block;
}
.config-p2 {
  font-size: 18px;
}
</style>

<style lang="less">
// 使用css变量覆盖全局样式
:root {
  --g-button-color: red;
}
</style>