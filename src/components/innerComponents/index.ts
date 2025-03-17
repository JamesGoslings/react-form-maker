import type { FC } from 'react'
import InputConf, { InputPropsType } from './InnerInput'
import TitleConf, { TitlePropsType } from './InnerTitle'

// 各个组件的 prop type
export type ComponentPropsType = InputPropsType & TitlePropsType

// 组件配置类型
export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

const componentConfs: ComponentConfType[] = [InputConf, TitleConf]

export function getComponentConfByType(type: string) {
  return componentConfs.find(c => c.type === type)
}
