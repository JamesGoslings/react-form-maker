import React, { FC, MouseEvent, DragEvent, useState } from 'react'
import styles from './index.module.scss'
import { Spin } from 'antd'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { ComponentInfoType, setSelectedId, addComponent } from '@/store/componentsReducer'
import { DragStateType } from '@/store/dragReducer'
import { StateType } from '@/store'
import { getComponentConfByType } from '@/components/innerComponents'
import { useDispatch, useSelector } from 'react-redux'
import DisplayComponent from './DisplayComponent'

type PropsType = {
  loading: boolean
}

const EditCanvas: FC<PropsType> = function ({ loading }: PropsType) {
  const { componentList, selectedId } = useGetComponentInfo()
  const dispatch = useDispatch()
  // 占位组件所在的索引
  const [tmpIndex, setTmpIndex] = useState<number | null>(null)
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

  /**
   * 清除占位组件
   */
  function clearTmpComponent() {
    setTmpIndex(null)
  }

  /**
   * 将最后一个组件的下方确认为占位组件
   */
  function setEndTmpComponent() {
    if (!componentList || componentList.length <= 0) {
      return
    }
    setTmpIndex(componentList.length)
  }

  /**
   * 拖拽元素进入其他组件之后的逻辑：确定占位组件
   * @param e
   * @param componentIndex 进入的组件的索引
   */
  function handleDragEnter(e: DragEvent, componentIndex: number) {
    e.stopPropagation()
    e.preventDefault()
    if (e.target instanceof HTMLElement) {
      const rect = e.target.getBoundingClientRect()
      const dragLeaveY = e.clientY
      const centerY = rect.top + rect.height / 2
      if (dragLeaveY < centerY) {
        setTmpIndex(componentIndex)
      } else {
        setTmpIndex(componentIndex + 1)
      }
    } else {
      clearTmpComponent()
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
    if (tmpIndex === null) {
      return
    }
    const componentInfo: ComponentInfoType = {
      fe_id: Math.random().toString(36).substring(2),
      type: dragingCompoentType,
      props: componentConf.defaultProps,
    }

    dispatch(
      addComponent({
        index: tmpIndex,
        ComponentInfo: componentInfo,
      })
    )

    clearTmpComponent()
  }

  /**
   * 实现离开画布之后，清除占位组件
   * @param e
   */
  function handleLeave(e: DragEvent) {
    e.preventDefault()
    e.stopPropagation()
    const canvasContainer = document.getElementById('canvasContainer')
    if (canvasContainer) {
      const relatedTarget = e.relatedTarget as HTMLElement | null
      if (!relatedTarget || !canvasContainer.contains(relatedTarget)) {
        clearTmpComponent()
      }
    }
  }

  /**
   * 处理进入 container 时的逻辑，
   * 实现如果是最后一个组件下方进入的，占位组件直接放最后一个
   * @param e
   */
  function handleEnterContainer(e: DragEvent) {
    e.preventDefault()
    const canvasContainer = document.getElementById('canvasContainer')
    if (!canvasContainer) {
      return
    }
    const lastComponent = document.getElementById('last')
    if (!lastComponent) {
      return
    }
    const lastComponentRect = lastComponent.getBoundingClientRect()
    const canvasRect = canvasContainer.getBoundingClientRect()
    const dragY = e.clientY
    if (dragY > lastComponentRect.bottom && dragY < canvasRect.bottom) {
      setEndTmpComponent()
    }
  }

  return (
    <div
      id="canvasContainer"
      className={styles.canvas}
      onDragOver={e => e.preventDefault()}
      onDragEnter={e => handleEnterContainer(e)}
      onDrop={e => handleDrop(e)}
      onDragLeave={e => handleLeave(e)}
    >
      {componentList.map((componentInfo, index) => {
        const { fe_id } = componentInfo
        return (
          <div key={fe_id}>
            {index === tmpIndex && (
              <div
                style={{ width: '100%' }}
                className={styles.placeholder}
                onDragOver={e => e.preventDefault()}
              >
                占位组件上
              </div>
            )}
            <div
              id={index + 1 === componentList.length ? 'last' : undefined}
              onClick={e => handleClick(e, fe_id)}
              onDragEnter={e => handleDragEnter(e, index)}
              onDragOver={e => e.preventDefault()}
            >
              <DisplayComponent
                info={componentInfo}
                curIndex={index}
                len={componentList.length}
                selectedId={selectedId}
              />
            </div>
          </div>
        )
      })}
      {componentList.length === tmpIndex && (
        <div
          style={{ width: '100%' }}
          className={styles.placeholder}
          onDragOver={e => e.preventDefault()}
        >
          占位组件end
        </div>
      )}
    </div>
  )
}

export default EditCanvas
