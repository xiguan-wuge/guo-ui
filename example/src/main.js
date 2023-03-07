import Vue from 'vue'
import App from './App.vue'

// import guoUI from 'guo-ui'
// console.log('guoUI', guoUI);
// Vue.use(guoUI)
import {button} from 'guo-ui'
console.log('Button', button);
// import 'guo-ui/lib/guoUI.css'
Vue.use(button)
// import { Button, Cell } from 'vant';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
