import { useDispatch } from 'react-redux'
import { ComponentPropsType } from '@/components/innerComponents'
import { setSelectedComponentPropertyConf } from '@/store/componentsReducer'
import { ValueTypeForKey } from '@/utils'

function useHandleChangeComponentProp<T extends ComponentPropsType>() {
  const dispatch = useDispatch()

  const handleChangeProp = <K extends keyof T & keyof ComponentPropsType>(
    key: K,
    value: ValueTypeForKey<ComponentPropsType, K>
  ) => {
    dispatch(setSelectedComponentPropertyConf({ key, value }))
  }

  return handleChangeProp
}

export default useHandleChangeComponentProp
