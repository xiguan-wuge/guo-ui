const { defineConfig } = require('@vue/cli-service')
const devConfig = require('./config/config.dev')
const buildConfig = require('./config/config.build')
console.log('process.env.NODE_ENV', process.env.VUE_MODE);
// 区分打包组件和打包demo
module.exports = process.env.VUE_MODE === 'lib' ? defineConfig(buildConfig) : defineConfig(devConfig)
// module.exports = defineConfig({
//   transpileDependencies: true,
//   // 修改 src 目录为 examples
//   // pages: {
//   //   index: {
//   //     entry: 'examples/main.js',
//   //     template: 'public/index.html',
//   //     filename: 'index.html'
//   //   }
//   // },
//   // 扩展webpack 配置，使packages 加入编译
//   chainWebpack: config => {
//     config.module
//       .rule('js')
//       .include
//         .add('/packages')
//         .end()
//       .use('babel')
//         .loader('babel-loader')
//         .tap(options => {
//           // 一些修改
//           return options
//         })
//   },
//   configureWebpack: {
//     resolve: {
//       // 配置路径别名
//       alias: {
//         'utils': '/utils'
//       }
//     },
//     module: {
//       rules: [
//         {
//           test: /\.less$/,
//           use: [
//             { loader: 'less-loader'}
//           ]
//         }
//       ]
//     }
//   }
// })
