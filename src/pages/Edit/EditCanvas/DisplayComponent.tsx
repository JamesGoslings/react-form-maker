import React, { FC, DragEvent } from 'react'
import { DisplayComponentProps } from './type'
import { ComponentInfoType, addComponent, deleteComponent } from '@/store/componentsReducer'
import { chanageDragMode, DragModeTypes } from '@/store/dragReducer'
import { useDispatch } from 'react-redux'
import { getComponentConfByType } from '@/components/innerComponents'
import { getRandomUUID } from '@/utils'
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

  /**
   * 开始拖拽的时候，完成相关的信息初始化
   * @param e 拖拽事件合成对象
   */
  function handleDragStart(e: DragEvent) {
    e.stopPropagation()
    e.dataTransfer.effectAllowed = 'move'
    dispatch(chanageDragMode(DragModeTypes.CANVAS))
    changeDraggingIndex(curIndex)
  }

  /**
   * 复制组件到下一个索引位
   */
  function copyComponent() {
    dispatch(
      addComponent({
        index: curIndex + 1,
        ComponentInfo: {
          ...info,
          fe_id: getRandomUUID(),
        },
      })
    )
  }

  /**
   * 移除当前组件
   */
  function deleteThisComponent() {
    const { fe_id } = info
    dispatch(deleteComponent({ fe_id }))
  }

  return (
    <div
      className={`${styles['canvas-wrapper']} ${selectedId === info.fe_id ? styles.selected : ''}`}
      draggable="true"
      onDragStart={e => handleDragStart(e)}
    >
      {selectedId === info.fe_id && (
        <div className={styles['canvas-mask']}>
          <div className={styles['mask-copy-wrapper']} onClick={copyComponent}>
            <i className={`iconfont icon-copy-area`}></i>
          </div>
          <div className={styles['mask-delete-wrapper']} onClick={deleteThisComponent}>
            <i className={`iconfont icon-delete-area`}></i>
          </div>
        </div>
      )}
      <div className={styles.component}>{getComponentByInfo(info)}</div>
    </div>
  )
}

export default DisplayComponent
