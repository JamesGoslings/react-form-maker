import React, { FC, useState, useEffect, useMemo } from 'react'
import styles from './index.module.scss'
import { Tabs } from 'antd'
import { useGetComponentInfo } from '@/hooks'
import ComponentConfig from '../ComponentConfig'
import FormConfig from '../FormConfig'

const RightPanel: FC = function () {
  const defaultOptions = useMemo(
    () => [
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
    ],
    []
  )

  const [options, setOptions] = useState(defaultOptions)
  const [actKey, setActKey] = useState<string>('formConf')

  const { selectedId } = useGetComponentInfo()

  useEffect(() => {
    if (selectedId) {
      setOptions(defaultOptions)
      setActKey('componentConf')
    } else {
      setOptions([defaultOptions[1]])
      setActKey('formConf')
    }
  }, [defaultOptions, selectedId])

  return (
    <div className={styles.container}>
      <Tabs activeKey={actKey} items={options} onChange={key => setActKey(key)} />
    </div>
  )
}

export default RightPanel
