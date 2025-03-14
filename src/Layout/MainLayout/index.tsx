import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'
import logo from '@/assets/images/logo.svg'
import userAvatar from '@/assets/images/user-avatar.svg'
import UserMenu from './UserMenu'

const MainLayout: FC = function () {
  return (
    <>
      <div className={styles.header}>
        <div className={styles['logo-wrapper']}>
          <img className={styles['logo']} src={logo} alt="logo" />
          <div className={styles['logo-text']}>FormMaker</div>
        </div>
        <div className={styles['nav-container']}>
          <nav className={styles['nav-wrapper']}>
            <div className={styles.item}>
              <i className={`iconfont icon-home ${styles.ico}`} />
              <span className={styles.text}>前往首页</span>
            </div>
            <a
              href="https://github.com/JamesGoslings/react-form-maker"
              className={`iconfont icon-github ${styles['ico-item']}`}
              title="Github"
              target="_blank"
              rel="noreferrer"
            />
          </nav>
          <div className={styles['user-wrapper']}>
            <img src={userAvatar} className={styles.avatar} alt="avatar" />
            <span className={styles.username}>JamesGosling</span>
            <i className={`iconfont icon-zhankai ${styles.ico}`} />
            <div className={styles['user-menu-wrapper']}>
              <UserMenu />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}
export default MainLayout
