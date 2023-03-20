const { defineConfig } = require('@vue/cli-service')
const path = require('path')
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
  configureWebpack: {
    resolve: {
      // 配置路径别名
      alias: {
        // 'mixins': '../mixins',
        // 'utils': '../utils'
        'mixins': path.resolve(__dirname, '../', 'mixins'),
        'utils': path.resolve(__dirname, '../', 'utils')
      }
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            { loader: 'less-loader'}
          ]
        },
        {
          test: /\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
  // configureWebpack: {
  //   resolve: {
  //     // 配置路径别名
  //     alias: {
  //       'utils': '../utils'
  //     }
  //   }
  // }
})
