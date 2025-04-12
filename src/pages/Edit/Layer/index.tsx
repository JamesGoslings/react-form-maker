import React, { FC } from 'react'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { getComponentConfListByTypes } from '@/components/innerComponents'
import { useDispatch } from 'react-redux'
import { useCopyComponent, useDeleteComponet } from '@/hooks'
import { setSelectedId } from '@/store/componentsReducer'
import { Popover } from 'antd'
import styles from './index.module.scss'

const Layer: FC = function () {
  const { componentList, selectedId } = useGetComponentInfo()
  // 拿到组件的配置信息
  const componentConfList = getComponentConfListByTypes(componentList.map(c => c.type))

  const dispatch = useDispatch()
  const copyComponent = useCopyComponent()
  const deleteComponent = useDeleteComponet()

  function handleClick(id: string) {
    dispatch(setSelectedId(id))
  }

  return (
    <div>
      {componentConfList.map((conf, index) => {
        const { iconClass, title } = conf
        const componentInfo = componentList[index]
        const { label = title } = componentInfo.props
        const { fe_id } = componentInfo
        return (
          <div
            className={`${styles.item}  ${selectedId === fe_id ? styles.selected : ''}`}
            onClick={() => handleClick(fe_id)}
          >
            <div className={styles.content}>
              <i className={`iconfont ${iconClass}`}></i>
              <span>{label}</span>
            </div>
            <div className={styles['fun-wrapper']}>
              <i className={`iconfont icon-show`}></i>
              <Popover
                content={
                  <>
                    <div
                      className={styles['more-fun']}
                      onClick={() => copyComponent(index, componentInfo)}
                    >
                      复制
                    </div>
                    <div className={styles['more-fun']} onClick={() => deleteComponent(fe_id)}>
                      删除
                    </div>
                  </>
                }
              >
                <i className={`iconfont icon-more`}></i>
              </Popover>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Layer
