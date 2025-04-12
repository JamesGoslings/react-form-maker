import { useDispatch } from 'react-redux'
import { deleteComponent } from '@/store/componentsReducer'

/**
 * 删除组件
 * @param fe_id 要删除的组件的id
 */
function useDeleteComponet() {
  const dispatch = useDispatch()
  return function (fe_id: string) {
    dispatch(deleteComponent({ fe_id }))
  }
}

export default useDeleteComponet
