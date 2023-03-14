module.exports = {
  // 引导用户输入的提示信息
  types: [
    {value: ':rocket: initial', name: 'initial:  初始化项目'},
    {value: ':construction: wip', name: 'wip:  工作进行中'},
    {value: ':sparkles: feat', name: 'feat:  新增一个功能'},
    {value: ':bug: fix', name: 'fix:  修复一个bug'}
  ],
  // 选择scope的提示信息
  message: {
    type: '请选择你要提交的类型',
    scope: '请输入修改范围（可选）',
    customScope: '请输入文件的修改范围（可选）',
    subject: '请简要描述提交（必选）',
    body: '请输入详细描述， 使用”|“换行（可选）',
    breaking: '列出任何突破性的变化(可选)',
    footer: '请输入要关闭的issue（可选）。例如：#31， #34',
    confirmCommit: '您确定要执行上面的提交吗'
  }
}