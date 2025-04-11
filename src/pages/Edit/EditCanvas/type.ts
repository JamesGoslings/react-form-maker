import { ComponentInfoType } from '@/store/componentsReducer'

export interface DisplayComponentProps {
  len?: number
  info: ComponentInfoType
  selectedId?: string | null
  curIndex: number
}
