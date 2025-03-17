import { useSelector } from 'react-redux'
import { StateType } from '@/store'
import { ComponentsStateType } from '@/store/componentsReducer'

function useGetComponentInfo() {
  const components = useSelector((state: StateType) => state.components) as ComponentsStateType
  const { componentList = [] } = components
  return {
    componentList,
  }
}

export default useGetComponentInfo
