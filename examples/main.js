import Vue from 'vue'
import App from './App.vue'

import {gButton, gTag} from '../packages/index'
console.log('gButton',gButton);
Vue.use(gButton)
Vue.use(gTag)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
