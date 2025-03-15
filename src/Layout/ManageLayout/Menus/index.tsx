import React, { FC } from 'react'
import { Button } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
const Menus: FC = function () {
  const { pathname: currentPath } = useLocation()
  const navigate = useNavigate()
  const menus = [
    {
      name: '全部表单',
      path: '/manage/allForm',
    },
    {
      name: '收藏表单',
      path: '/manage/starForm',
    },
    {
      name: '回收站',
      path: '/manage/recycle',
    },
  ]

  return (
    <div className={styles.container}>
      <Button
        block
        type="primary"
        size="large"
        className={styles.btn}
        onClick={() => navigate('/edit')}
      >
        <span className={styles['btn-content']}>
          <i className={`iconfont icon-add ${styles.ico}`} />
          新建表单
        </span>
      </Button>
      <div className={styles.wrapper}>
        {menus.map(menu => {
          const { name, path } = menu
          return (
            <div
              className={`${styles.item} ${currentPath === path ? styles.active : ''}`}
              key={path}
              onClick={() => navigate(path)}
            >
              {name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menus
