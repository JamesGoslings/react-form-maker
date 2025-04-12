import { useSelector } from 'react-redux'
import { FormConfStateType, defaultFormConf } from '@/store/formConfReducer'
import { StateType } from '@/store'

/**
 * 获取全局表单配置信息
 */

function useGetFormConf() {
  const formConf = useSelector((state: StateType) => state.formConf) as FormConfStateType
  return {
    ...defaultFormConf,
    ...formConf,
  }
}

export default useGetFormConf
