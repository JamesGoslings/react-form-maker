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

// 全部的组件配置的列表
const componentConfs: ComponentConfType[] = [InputConf, TitleConf]

// 组件分组
export const componentConfGroup = [
  {
    groupName: '文本显示',
    componentConfs: [TitleConf],
  },
  {
    groupName: '用户输入',
    componentConfs: [InputConf],
  },
]
export function getComponentConfByType(type: string) {
  return componentConfs.find(c => c.type === type)
}
