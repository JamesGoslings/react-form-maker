/**
 * @description 密码输入框组件
 */

import Component from './Component'
import PropertyConf from './PropertyConf'
import { passwordInputDefaultProps } from './type'
import { ComponentConfType, ComponentType } from '../type'

export * from './type'

const InnerTextAreaConfig: ComponentConfType = {
  title: '密码输入框',
  type: ComponentType.PASSWORD,
  Component,
  PropertyConf,
  defaultProps: passwordInputDefaultProps,
  iconClass: 'icon-form-password',
}

export default InnerTextAreaConfig
