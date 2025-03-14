import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'

const ManageLayout: FC = function () {
  return (
    <div className={styles['manage-container']}>
      <div>ManageLayout-Header</div>
      <Outlet />
    </div>
  )
}
export default ManageLayout
