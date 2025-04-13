import React, { FC } from 'react'
import styles from './index.module.scss'
import { Tabs } from 'antd'
import { useGetComponentInfo } from '@/hooks'
import ComponentConfig from '../ComponentConfig'
import FormConfig from '../FormConfig'

const RightPanel: FC = function () {
  const options = [
    {
      key: 'componentConf',
      label: <span>组件配置</span>,
      children: <ComponentConfig />,
      icon: <i className={`iconfont icon-component-conf ${styles.icon}`}></i>,
    },
    {
      key: 'formConf',
      label: <span>表单配置</span>,
      children: <FormConfig />,
      icon: <i className={`iconfont icon-form-conf ${styles.icon}`}></i>,
    },
  ]
  let defaultActiveKey = 'componentConf'
  // 没有选中组件，则没有组件配置
  const { selectedId } = useGetComponentInfo()
  if (!selectedId) {
    options.splice(0, 1)
    defaultActiveKey = 'formConf'
  }
  return (
    <div className={styles.container}>
      <Tabs defaultActiveKey={defaultActiveKey} items={options} />
    </div>
  )
}
export default RightPanel
