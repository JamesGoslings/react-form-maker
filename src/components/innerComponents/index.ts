import InputConf from './InnerInput'
import TitleConf from './InnerTitle'
import type { ComponentConfType } from './type'

export * from './type'

// 全部的组件配置的列表
const componentConfs: ComponentConfType[] = [InputConf, TitleConf]

// 组件分组
export const componentConfGroup = [
  {
    groupName: '文本显示',
    componentConfs: [TitleConf],
  },
  {
    groupName: '基础组件',
    componentConfs: [InputConf],
  },
]
export function getComponentConfByType(type: string): ComponentConfType | undefined {
  return componentConfs.find(c => c.type === type)
}
