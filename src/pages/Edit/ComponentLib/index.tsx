import React, { FC } from 'react'
import { Typography } from 'antd'
import { componentConfGroup, ComponentConfType } from '@/components/innerComponents'
import styles from './index.module.scss'

const { Title } = Typography

function getComponentByConf(config: ComponentConfType) {
  const { title, type, Component } = config
  return (
    <div className={styles.wrapper}>
      <div className={styles.component}>
        <Component />
      </div>
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
            <div>{componentConfs.map(config => getComponentByConf(config))}</div>
          </div>
        )
      })}
    </>
  )
}

export default ComponentLib
