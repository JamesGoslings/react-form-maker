/**
 * @description 输入框组件
 */

import Component from './Component'
import PropertyConf from './PropertyConf'
import { inputDefaultProps } from './type'
import { ComponentConfType, ComponentType } from '../type'

export * from './type'

const InnerInputConfig: ComponentConfType = {
  title: '输入框',
  type: ComponentType.INPUT,
  Component,
  PropertyConf,
  defaultProps: inputDefaultProps,
  iconClass: 'icon-form-input',
}

export default InnerInputConfig
