// 整合所有组件，对外导出

import gButton from "./gButton";
import gTag from "./gTag";


const components = [
  gButton,
  gTag
]

const install = function(Vue) {
  if(install.installed) return

  components.map(comp => Vue.component(comp.name, comp))
}


// 判断是否直接引入文件
if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  gButton,
  gTag
}
export default {
  install,
  gButton,
  gTag
}