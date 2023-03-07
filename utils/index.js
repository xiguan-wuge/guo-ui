export function createNameSpace(name) {
  const prefixName = `g-${kebabCase(name)}`
  return [
    prefixName
  ]
}

// 组件统一添加install方法
export function withInstall(component) {
  component.install = (Vue) =>{
    const {name} = component
    if(name) {
      Vue.component(name, component)
    }
  }
  return component
}

// 驼峰转横杠
export function kebabCase(str) {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')
}