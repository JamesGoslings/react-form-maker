import React, { FC, MouseEvent } from 'react'
import styles from './index.module.scss'
import { Spin } from 'antd'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { ComponentInfoType, setSelectedId } from '@/store/componentsReducer'
import { getComponentConfByType } from '@/components/innerComponents'
import { useDispatch } from 'react-redux'

type PropsType = {
  loading: boolean
}

function getComponent(component: ComponentInfoType) {
  const { type, props } = component
  const componentConf = getComponentConfByType(type)
  if (!componentConf) {
    return null
  }
  const { Component } = componentConf
  return <Component {...props} />
}

const EditCanvas: FC<PropsType> = function ({ loading }: PropsType) {
  const { componentList, selectedId } = useGetComponentInfo()
  const dispatch = useDispatch()
  function handleClick(e: MouseEvent, id: string) {
    // 阻止冒泡，防止 selecedId 被清空
    e.stopPropagation()
    dispatch(setSelectedId(id))
  }
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <Spin />
      </div>
    )
  }
  return (
    <div className={styles.canvas}>
      {componentList.map(componentInfo => {
        const { fe_id } = componentInfo
        return (
          <div
            key={fe_id}
            className={`${styles['canvas-wrapper']} ${selectedId === fe_id ? styles.selected : ''}`}
            onClick={e => handleClick(e, fe_id)}
          >
            <div className={styles.component}>{getComponent(componentInfo)}</div>
          </div>
        )
      })}
    </div>
  )
}

export default EditCanvas
