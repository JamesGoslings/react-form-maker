/**
 * @description 输入框组件
 */

import Component from './Component'
import PropertyConf from './PropertyConf'
import { titleDefaultProps } from './type'
import { ComponentConfType, ComponentType } from '../type'

export * from './type'

const InnerTitleConfig: ComponentConfType = {
  title: '标题',
  type: ComponentType.TITLE,
  Component,
  PropertyConf,
  defaultProps: titleDefaultProps,
  iconClass: 'icon-form-title',
}

export default InnerTitleConfig
