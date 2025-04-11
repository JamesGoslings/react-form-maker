import React, { FC } from 'react'
import styles from './TmpComponent.module.scss'
import { getComponentConfByType } from '@/components/innerComponents'

type PropTypes = {
  type: string // 组件类型
}

/**
 * 占位组件
 */
const TmpComponent: FC<PropTypes> = function (props: PropTypes) {
  const { type } = props
  const defaultConf = {
    iconClass: 'icon-ico',
    title: '组件名称未定义',
  }
  const { iconClass, title } = getComponentConfByType(type) ?? defaultConf
  return (
    <div className={styles.placeholder} onDragOver={e => e.preventDefault()}>
      <i className={`iconfont ${iconClass}`}></i>
      <span>{title}</span>
    </div>
  )
}

export default TmpComponent
