import React, { FC } from 'react'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { Divider } from 'antd'
const Item: FC = function () {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles['title-wrapper']}>
        <span className={styles.title}>请假审批表单</span>
        <div className={styles.info}>
          <span>ID：16465465</span>
          <span>创建时间：3月16日</span>
        </div>
      </div>
      <Divider />
      <div className={styles['fun-container']}>
        <div className={styles['left-wrapper']}>
          <div
            className={styles['left-item']}
            onClick={() => {
              navigate(`/edit?id=66`)
            }}
          >
            <i className={`iconfont icon-edit ${styles['icon-edit']}`} />
            <span className={styles['text']}>设计表单</span>
          </div>
        </div>
        <div className={styles['right-wrapper']}>
          <div className={styles['right-item']}>
            <i className={`iconfont icon-star ${styles.icon}`} />
            <span className={styles['text']}>收藏</span>
          </div>
          <div className={styles['right-item']}>
            <i className={`iconfont icon-view ${styles['icon']}`} />
            <span className={styles['text']}>预览</span>
          </div>
          <div className={styles['right-item']}>
            <i className={`iconfont icon-copy ${styles['icon']}`} />
            <span className={styles['text']}>复制</span>
          </div>
          <div className={styles['right-item']}>
            <i className={`iconfont icon-delete ${styles['icon']}`} />
            <span className={styles['text']}>删除</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
