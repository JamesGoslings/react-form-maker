import type { FC } from 'react'
import { InputPropsType } from './InnerInput'
import { TitlePropsType } from './InnerTitle'

// 各个组件的 prop type
export type ComponentPropsType = InputPropsType & TitlePropsType

// 组件配置类型
export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
  iconClass: string
}
