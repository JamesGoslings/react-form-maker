import React, { FC } from 'react'
import styles from './index.module.scss'
import { Tabs } from 'antd'
import ComponentConfig from '../ComponentConfig'
import FormConfig from '../FormConfig'

const RightPanel: FC = function () {
  return (
    <div className={styles.container}>
      <Tabs
        defaultActiveKey="componentLib"
        items={[
          {
            key: 'componentLib',
            label: <span>组件配置</span>,
            children: <ComponentConfig />,
            icon: <i className={`iconfont icon-component-conf ${styles.icon}`}></i>,
          },
          {
            key: 'layers',
            label: <span>表单配置</span>,
            children: <FormConfig />,
            icon: <i className={`iconfont icon-form-conf ${styles.icon}`}></i>,
          },
        ]}
      />
    </div>
  )
}
export default RightPanel
