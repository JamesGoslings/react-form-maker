/**
 * @description 文本框组件
 */

import Component from './Component'
import PropertyConf from './PropertyConf'
import { textAreaDefaultProps } from './type'
import { ComponentConfType, ComponentType } from '../type'

export * from './type'

const InnerTextAreaConfig: ComponentConfType = {
  title: '文本输入框',
  type: ComponentType.TEXT_AREA,
  Component,
  PropertyConf,
  defaultProps: textAreaDefaultProps,
  iconClass: 'icon-form-textarea',
}

export default InnerTextAreaConfig
