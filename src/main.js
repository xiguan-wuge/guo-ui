import Vue from 'vue'
import App from './App.vue'

import {Button, Tag, Slider} from '../packages/index'
import VConsole from 'vconsole'
new VConsole()
console.log('Button',Button);
Vue.use(Button)
Vue.use(Tag)
Vue.use(Slider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
