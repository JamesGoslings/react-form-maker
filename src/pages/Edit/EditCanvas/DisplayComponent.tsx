import React, { FC, DragEvent } from 'react'
import { DisplayComponentProps } from './type'
import { ComponentInfoType } from '@/store/componentsReducer'
import { chanageDragMode, DragModeTypes } from '@/store/dragReducer'
import { useDispatch } from 'react-redux'
import { getComponentConfByType } from '@/components/innerComponents'
import { useCopyComponent, useDeleteComponet } from '@/hooks'
import FormItemWithConf from './FormItemWithConf'
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
  const { fe_id, hidden = false } = info
  const { label = '' } = props.info.props

  const dispatch = useDispatch()
  const copyComponent = useCopyComponent()
  const deleteComponent = useDeleteComponet()
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
  return (
    <div
      className={`${styles['canvas-wrapper']} ${selectedId === info.fe_id ? styles.selected : ''}`}
      draggable="true"
      onDragStart={e => handleDragStart(e)}
    >
      {selectedId === info.fe_id && (
        <div className={styles['canvas-mask']}>
          <div
            className={styles['mask-copy-wrapper']}
            onClick={() => copyComponent(curIndex, info)}
          >
            <i className={`iconfont icon-copy-area`}></i>
          </div>
          <div className={styles['mask-delete-wrapper']} onClick={() => deleteComponent(fe_id)}>
            <i className={`iconfont icon-delete-area`}></i>
          </div>
        </div>
      )}
      {hidden && (
        <div className={styles['canvas-mask-hidden']}>
          <i className="iconfont icon-hide"></i>
          <span>隐藏</span>
        </div>
      )}
      <FormItemWithConf label={label}>
        <div className={styles.component}>{getComponentByInfo(info)}</div>
      </FormItemWithConf>
    </div>
  )
}

export default DisplayComponent
