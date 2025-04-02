/**
 * @description 输入框组件
 */

import Component from './Component'
import { inputDefaultProps } from './type'
import { ComponentConfType } from '../index'

export * from './type'

const InnerInputConfig: ComponentConfType = {
  title: '输入框',
  type: 'innerInput',
  Component,
  defaultProps: inputDefaultProps,
  iconClass: 'icon-form-input',
}

export default InnerInputConfig
