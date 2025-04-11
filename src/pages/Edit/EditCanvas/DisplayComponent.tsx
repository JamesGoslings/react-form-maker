import React, { FC, DragEvent } from 'react'
import { DisplayComponentProps } from './type'
import { ComponentInfoType } from '@/store/componentsReducer'
import { chanageDragMode, DragModeTypes } from '@/store/dragReducer'
import { useDispatch } from 'react-redux'
import { getComponentConfByType } from '@/components/innerComponents'
import styles from './DisplayComponent.module.scss'

/**
 * 通过组件info生成组件
 * @param component  组件info
 * @returns
 */
function getComponentByInfo(component: ComponentInfoType) {
  const { type, props } = component
  const componentConf = getComponentConfByType(type)
  if (!componentConf) {
    return null
  }
  const { Component } = componentConf
  return <Component {...props} />
}
const DisplayComponent: FC<DisplayComponentProps> = function (props: DisplayComponentProps) {
  const { info, selectedId, onChangeDraggingIndex: changeDraggingIndex, curIndex } = props
  const dispatch = useDispatch()
  function handleDragStart(e: DragEvent) {
    e.stopPropagation()
    e.dataTransfer.effectAllowed = 'move'
    dispatch(chanageDragMode(DragModeTypes.CANVAS))
    changeDraggingIndex(curIndex)
  }
  return (
    <div
      className={`${styles['canvas-wrapper']} ${selectedId === info.fe_id ? styles.selected : ''}`}
      draggable="true"
      onDragStart={e => handleDragStart(e)}
    >
      <div className={styles.component}>{getComponentByInfo(info)}</div>
    </div>
  )
}

export default DisplayComponent
