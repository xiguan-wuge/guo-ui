export function createNameSpace(name) {
  const prefixName = `g-${name}`
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