import React, { FC } from 'react'
import styles from './index.module.scss'
import EditCanvas from './EditCanvas'
import LeftPanel from './LeftPanel'
import useLoadFormData from '@/hooks/useLoadFormData'
import { useDispatch } from 'react-redux'
import { setSelectedId } from '@/store/componentsReducer'

const Edit: FC = function () {
  const { loading } = useLoadFormData()
  const dispatch = useDispatch()
  function clearSelectedId() {
    dispatch(setSelectedId(''))
  }
  return (
    <div className={styles['edit-container']}>
      <header className={styles.header}>Edit</header>
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LeftPanel />
          </div>
          <main className={styles.main} onClick={clearSelectedId}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas loading={loading} />
            </div>
          </main>
          <div className={styles.right}>Right</div>
        </div>
      </div>
    </div>
  )
}

export default Edit
