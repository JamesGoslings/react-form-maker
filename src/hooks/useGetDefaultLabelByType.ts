import { useMemo } from 'react'
import { ComponentType, getComponentConfByType } from '@/components/innerComponents'

const useGetDefaultLabelByType = (type: ComponentType) => {
  // 拿组件title作为默认标签值
  const defaultLabel = useMemo(() => {
    return getComponentConfByType(type)?.title ?? ''
  }, [type])
  return defaultLabel
}

export default useGetDefaultLabelByType
