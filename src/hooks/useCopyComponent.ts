import { useDispatch } from 'react-redux'
import { addComponent, ComponentInfoType } from '@/store/componentsReducer'
import { getRandomUUID } from '@/utils'

/**
 * 复制当前组件到下一个所有位置
 * @param curIndex 当前组件索引
 * @param info 当前组件信息
 * @returns 新组件信息
 */
function useCopyComponent() {
  const dispatch = useDispatch()
  return function (curIndex: number, info: ComponentInfoType) {
    const newCoponent = {
      index: curIndex + 1,
      ComponentInfo: {
        ...info,
        fe_id: getRandomUUID(),
      },
    }
    dispatch(addComponent(newCoponent))
    return newCoponent
  }
}

export default useCopyComponent
