import React from 'react'
import InputConf from './InnerInput'
import TitleConf from './InnerTitle'
import TextAreaConf from './InnerTextArea'
import { ComponentConfType, ComponentType, GroupIds, ComponentPropsType } from './type'

export * from './type'

// 全部的组件配置的列表
const componentConfs: ComponentConfType[] = [InputConf, TitleConf, TextAreaConf]

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
    componentConfs: [InputConf, TextAreaConf],
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

/**
 * 通过组件类型拿物料对应的属性配置器
 * @param type 组件类型
 * @returns
 */
export function getPropertyConfByType(
  type: ComponentType,
  props: ComponentPropsType
): JSX.Element | undefined {
  const { PropertyConf } = getComponentConfByType(type) ?? {}
  return PropertyConf ? <PropertyConf {...props} /> : undefined
}
