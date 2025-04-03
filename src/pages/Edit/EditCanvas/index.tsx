import React, { FC, MouseEvent, DragEvent, useState } from 'react'
import styles from './index.module.scss'
import { Spin } from 'antd'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { ComponentInfoType, setSelectedId, addComponent } from '@/store/componentsReducer'
import { DragStateType } from '@/store/dragReducer'
import { StateType } from '@/store'
import { getComponentConfByType } from '@/components/innerComponents'
import { useDispatch, useSelector } from 'react-redux'

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
  // 确定占位元素的位置(在哪个元素上/下)
  const [relativeEleId, setRelativeEleId] = useState<string | null>(null)
  const [placement, setPlacement] = useState<'top' | 'bottom' | null>(null)

  // 拿到拖拽中的组件的 type
  const { dragingCompoentType } = useSelector((state: StateType) => state.drag) as DragStateType

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

  function handleDragLeave(e: DragEvent, id: string) {
    e.stopPropagation()
    e.preventDefault()

    if (e.target instanceof HTMLElement) {
      setRelativeEleId(id)
      const rect = e.target.getBoundingClientRect()
      const dragLeaveY = e.clientY
      if (dragLeaveY < rect.top) {
        setPlacement('top')
      } else if (dragLeaveY > rect.bottom) {
        setPlacement('bottom')
      }
    } else {
      setRelativeEleId(null)
    }
  }

  /**
   * 拖拽组件放开时的逻辑：新组件添加、占位组件移除
   */
  function handleDrop(e: DragEvent) {
    e.stopPropagation()
    e.preventDefault()
    // 添加组件到 redux 状态中
    const componentConf = getComponentConfByType(dragingCompoentType)
    if (!componentConf) {
      return
    }
    const index = componentList.findIndex(component => component.fe_id === relativeEleId)
    const componentInfo: ComponentInfoType = {
      fe_id: Math.random().toString(36).substring(2),
      type: dragingCompoentType,
      props: componentConf.defaultProps,
    }
    dispatch(
      addComponent({
        index,
        ComponentInfo: componentInfo,
      })
    )

    // 清除占位组件
    setRelativeEleId(null)
    setPlacement(null)
  }

  return (
    <div className={styles.canvas} onDragOver={e => e.preventDefault()}>
      {componentList.map(componentInfo => {
        const { fe_id } = componentInfo
        return (
          <div key={fe_id}>
            {placement === 'top' && relativeEleId === fe_id && (
              <div className={styles.placeholder}>占位组件上</div>
            )}
            <div
              className={`${styles['canvas-wrapper']} ${selectedId === fe_id ? styles.selected : ''}`}
              onClick={e => handleClick(e, fe_id)}
              onDragLeave={e => handleDragLeave(e, fe_id)}
              onDragOver={e => e.preventDefault()}
              onDrop={e => handleDrop(e)}
            >
              <div className={styles.component}>{getComponent(componentInfo)}</div>
            </div>
            {placement === 'bottom' && relativeEleId === fe_id && (
              <div className={styles.placeholder}>占位组件下</div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default EditCanvas
