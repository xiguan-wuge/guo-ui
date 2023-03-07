const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // modifyVars: {
          //   // 直接修改变量
          //   // ''
          //   // 或者可以通过less文件覆盖（文件路径为绝对路径）
          //   hack: `true; @import ''`
          // }
        }
      }
    }
  },
  // configureWebpack: {
  //   resolve: {
  //     // 配置路径别名
  //     alias: {
  //       'utils': '../utils'
  //     }
  //   }
  // }
})
