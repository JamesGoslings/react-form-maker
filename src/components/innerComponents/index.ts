import InputConf from './InnerInput'
import TitleConf from './InnerTitle'
import { ComponentConfType, ComponentType, GroupIds } from './type'

export * from './type'

// 全部的组件配置的列表
const componentConfs: ComponentConfType[] = [InputConf, TitleConf]

// 组件分组
export const componentConfGroup = [
  {
    groupId: GroupIds.SHOW,
    groupName: '文本显示',
    componentConfs: [TitleConf],
  },
  {
    groupId: GroupIds.BASIC,
    groupName: '基础组件',
    componentConfs: [InputConf],
  },
]
export function getComponentConfByType(
  type: ComponentType | '' | null
): ComponentConfType | undefined {
  return componentConfs.find(c => c.type === type)
}

export function getComponentConfListByTypes(
  typeList: (ComponentType | '' | null)[]
): ComponentConfType[] {
  return typeList.map(type => getComponentConfByType(type)).filter(Boolean) as ComponentConfType[]
}

export function getGroupIdByComponentType(type: ComponentType): GroupIds {
  for (const { groupId, componentConfs } of componentConfGroup) {
    if (componentConfs.find(conf => conf.type === type)) {
      return groupId
    }
  }
  throw new Error(`未找到${type}类型的组件对应的groupId`)
}
