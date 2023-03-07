// 整合所有组件，对外导出

import Button from "./button";
import Tag from "./tag";
import Slider from "./slider";


const components = [
  Button,
  Tag,
  Slider
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
  Button,
  Tag,
  Slider
}
export default {
  install,
  Button,
  Tag,
  Slider
}