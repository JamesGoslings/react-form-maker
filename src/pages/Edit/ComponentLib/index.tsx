import React, { FC, DragEvent } from 'react'
import { Typography } from 'antd'
import { componentConfGroup, ComponentConfType } from '@/components/innerComponents'
import styles from './index.module.scss'

const { Title } = Typography

function getComponentIconShowByConf(config: ComponentConfType) {
  const { title, iconClass } = config
  const handleDragStart = (e: DragEvent) => {
    e.dataTransfer.effectAllowed = 'copyMove'
  }
  return (
    <div className={styles.wrapper} draggable="true" onDragStart={e => handleDragStart(e)}>
      <i className={`iconfont ${iconClass} ${styles.icon}`}></i>
      <div>{title}</div>
    </div>
  )
}

const ComponentLib: FC = function () {
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
              {componentConfs.map(config => getComponentIconShowByConf(config))}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ComponentLib
