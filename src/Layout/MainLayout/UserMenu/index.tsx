import React, { FC } from 'react'
import { List } from 'antd'
import styles from './index.module.scss'
const UserMenu: FC = function () {
  return (
    <List className={styles.container}>
      <List.Item className={styles['item-wrapper']}>
        <i className={`iconfont icon-quit ${styles.ico}`} />
        退出
      </List.Item>
    </List>
  )
}

export default UserMenu
