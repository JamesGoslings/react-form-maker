import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getFormData } from '../apis/form'
import { useDispatch } from 'react-redux'
import { resetComponents } from '../store/componentsReducer'

function useLoadFormData() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const dispatch = useDispatch()

  const { data, loading, error, run } = useRequest(
    async (id: string) => {
      if (!id) {
        throw new Error('没有表单 id')
      }
      const { data } = await getFormData(id)
      return data
    },
    {
      manual: true,
    }
  )

  useEffect(() => {
    if (!data) return
    const { componentList = [] } = data.data
    let selectedId = ''
    // 默认选中第一个组件
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id
    }
    dispatch(resetComponents({ componentList, selectedId }))
  }, [data, dispatch])

  useEffect(() => {
    run(id)
  }, [id, run])
  return { data, loading, error }
}
export default useLoadFormData
