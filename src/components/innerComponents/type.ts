import type { FC } from 'react'
import { InputPropsType } from './InnerInput'
import { TitlePropsType } from './InnerTitle'

// 各个组件的 prop type
export type ComponentPropsType = InputPropsType & TitlePropsType

// 组件配置类型
export type ComponentConfType = {
  title: string
  type: ComponentType
  Component: FC<ComponentPropsType>
  PropertyConf: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
  iconClass: string
}

export enum ComponentType {
  TITLE = 'innerTitle',
  INPUT = 'innerInput',
  TEXT_AREA = 'innerTextArea',
  PASSWORD = 'innerPassword',
}

export enum GroupIds {
  BASIC = 'basic',
  SHOW = 'show',
}
