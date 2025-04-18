import React, { FC } from 'react'
import { useGetComponentInfo } from '@/hooks'
import { ComponentInfoType } from '@/store/componentsReducer'
import {
  getGroupIdByComponentType,
  GroupIds,
  getPropertyConfByType,
  getComponentConfByType,
} from '@/components/innerComponents'
import BasicConfig from './BasicConfig'
import styles from './index.module.scss'

export * from './type'
const ComponentConfig: FC = function () {
  // 获取当前选中的组件的信息
  const { selectedId, componentList } = useGetComponentInfo()
  const {
    basicProps = {},
    type,
    props,
  } = (componentList.find(c => c.fe_id === selectedId) as ComponentInfoType) ?? {}
  if (!selectedId || !type) {
    return <></>
  }
  const selectedComponentConf = getComponentConfByType(type)
  if (!selectedComponentConf) {
    return <div>暂无配置信息</div>
  }
  const { title } = selectedComponentConf
  const groupId = getGroupIdByComponentType(type)
  return (
    <div>
      {groupId === GroupIds.BASIC && (
        <>
          <div className={styles['config-title']}>基础配置</div>
          <BasicConfig {...basicProps} defaultLabel={title} />
        </>
      )}
      <div className={styles['config-title']}>属性配置</div>
      {getPropertyConfByType(type, props) ?? <div>暂无属性配置</div>}
    </div>
  )
}

export default ComponentConfig
