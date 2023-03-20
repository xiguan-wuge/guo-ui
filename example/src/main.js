import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import guoUI from 'guo-ui'
// console.log('guoUI', guoUI);
// Vue.use(guoUI)
// import {Button} from 'guo-ui'
// console.log('Button', Button);
// import 'guo-ui/lib/guoUI.css'
// Vue.use(Button)
// import { Button, Cell }s from 'vant';

import guoUI from '../../packages/index'
Vue.use(guoUI)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
