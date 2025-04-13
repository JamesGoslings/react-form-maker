import React, { FC } from 'react'
import { useGetComponentInfo } from '@/hooks'
import { ComponentInfoType } from '@/store/componentsReducer'
import { getGroupIdByComponentType, GroupIds } from '@/components/innerComponents'
import BasicConfig from './BasicConfig'
import styles from './index.module.scss'

export * from './type'
const ComponentConfig: FC = function () {
  // 获取当前选中的组件的信息
  const { selectedId, componentList } = useGetComponentInfo()
  const { basicProps = {}, type } =
    (componentList.find(c => c.fe_id === selectedId) as ComponentInfoType) ?? {}
  if (!selectedId || !type) {
    return <></>
  }
  const groupId = getGroupIdByComponentType(type)
  return (
    <div>
      {groupId === GroupIds.BASIC && (
        <>
          <div className={styles['config-title']}>基础配置</div>
          <BasicConfig {...basicProps} />
        </>
      )}
    </div>
  )
}

export default ComponentConfig
