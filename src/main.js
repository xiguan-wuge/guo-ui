import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入打包前的资源
// import {Button, Tag, Slider, ConfigProvider} from '../packages/index'
// 引入打包后的资源
// import {Button, Tag, Slider, ConfigProvider} from 'guo-ui'
// import 'guo-ui/lib/index/style.css' // 按需引用未生效，先全局引用
import guoUI from '../packages/index'
// import guoUI from 'guo-ui'
console.log('guoUI', guoUI);
Vue.use(guoUI)

import VConsole from 'vconsole'
// new VConsole()

// 引入自定义绿色主题
import './style/theme-green.less';

// console.log('Button',Button);
// Vue.use(Button)
// Vue.use(Tag)
// Vue.use(Slider)
// Vue.use(ConfigProvider)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
