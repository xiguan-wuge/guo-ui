module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'guo-ui',
        libraryDirectory: 'lib',
        // 指定样式路径
        // style: true,
        style:name => {
          return `${name}/style.css`
        },
        camel2DashComponentName: false, // 是否需要驼峰转短横线
        camel2UnderlineComponentName: false // 是否需要驼峰转下划线
      }
    ]
  ]
}
