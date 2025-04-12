import React, { FC } from 'react'
import { Tabs } from 'antd'
import { AppstoreAddOutlined, BarsOutlined } from '@ant-design/icons'
import ComponentLib from '../ComponentLib'
import Layer from '../Layer'
import styles from './index.module.scss'
const LeftPanel: FC = function () {
  return (
    <div className={styles.container}>
      <Tabs
        defaultActiveKey="componentLib"
        items={[
          {
            key: 'componentLib',
            label: <span>组件库</span>,
            children: <ComponentLib />,
            icon: <AppstoreAddOutlined />,
          },
          {
            key: 'layers',
            label: <span>图层</span>,
            children: <Layer />,
            icon: <BarsOutlined />,
          },
        ]}
      />
    </div>
  )
}

export default LeftPanel
