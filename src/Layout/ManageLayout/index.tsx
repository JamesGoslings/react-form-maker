import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'
import Menus from './Menus'

const ManageLayout: FC = function () {
  return (
    <div className={styles['manage-container']}>
      <div className={styles['wrapper']}>
        <Menus />
        <Outlet />
      </div>
    </div>
  )
}
export default ManageLayout
