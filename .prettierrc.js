module.exports = {
  // 箭头函数只有一个参数时，不需要括号
  arrowParens: 'avoid',
  // 括号中不要出现空格
  bracketSpacing: true,
  // 行结束使用 Unix 格式
  endOfLine: 'lf',
  jsxBracketSameLine: false,

  // 行宽
  printWidth: 100,
  // 换行方式
  proseWrap: 'preserve',
  // 分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 缩进
  tabWidth: 2,
  useTabs: false,
  // 后置逗号，多行对象，数组在最后一行增加逗号
  trailingComma: 'es5',
  parser: 'typescript',
}
