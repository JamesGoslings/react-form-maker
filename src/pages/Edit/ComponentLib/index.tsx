import React, { FC, DragEvent } from 'react'
import { Typography } from 'antd'
import { componentConfGroup, ComponentConfType } from '@/components/innerComponents'
import { setDragingCompoentType } from '@/store/dragReducer'
import { AppDispatch } from '@/store'
import { useDispatch } from 'react-redux'
import styles from './index.module.scss'

const { Title } = Typography

/**
 * 通过组件配置生成组件图标的展示视图及拖拽状态的逻辑处理
 * @param config 组件配置
 * @param dispatch 更新状态的dispatch
 * @returns
 */
function getComponentIconShowByConf(config: ComponentConfType, dispatch: AppDispatch) {
  const { title, iconClass, type } = config
  const handleDragStart = (e: DragEvent) => {
    e.dataTransfer.effectAllowed = 'copyMove'
    dispatch(setDragingCompoentType(type))
  }
  return (
    <div
      key={type}
      className={styles.wrapper}
      draggable="true"
      onDragStart={e => handleDragStart(e)}
    >
      <i className={`iconfont ${iconClass} ${styles.icon}`}></i>
      <div>{title}</div>
    </div>
  )
}

const ComponentLib: FC = function () {
  const dispatch = useDispatch()
  return (
    <>
      {componentConfGroup.map((group, index) => {
        const { groupName, componentConfs } = group
        return (
          <div key={index}>
            <Title level={3} style={{ fontSize: '16px', marginTop: index === 0 ? '0' : '0.2rem' }}>
              {groupName}
            </Title>
            <div className={styles.container}>
              {componentConfs.map(config => getComponentIconShowByConf(config, dispatch))}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ComponentLib
