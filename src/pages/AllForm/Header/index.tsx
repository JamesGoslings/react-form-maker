import React, { FC } from 'react'
import styles from './index.module.scss'
const Header: FC = function () {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>全部表单</h2>
      <div className={styles['fun-wrapper']}>
        <form className={styles['ipt-container']} onSubmit={submit}>
          <input type="text" placeholder="请输入表单名称" />
          <button type="submit" className={`iconfont icon-ipt ${styles['search-btn']}`}></button>
        </form>
      </div>
    </div>
  )
}

export default Header
