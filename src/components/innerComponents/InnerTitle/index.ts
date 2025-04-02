/**
 * @description 输入框组件
 */

import Component from './Component'
import { titleDefaultProps } from './type'
import { ComponentConfType } from '../index'

export * from './type'

const InnerTitleConfig: ComponentConfType = {
  title: '标题',
  type: 'innerTitle',
  Component,
  defaultProps: titleDefaultProps,
  iconClass: 'icon-form-title',
}

export default InnerTitleConfig
