import { StylePropType } from '@/components/common/UnitStyleSelect'
import { DeepReadonly } from '@/utils'

export interface BasicConfType {
  label: string
  helpText?: string
  componentWidth: string
  labelAlign?: 'left' | 'right'
  hiddenLabel?: boolean
  labelWidth?: StylePropType
}

export type BasicConfPropsType = Partial<BasicConfType> & {
  defaultLabel: string
}

export const defaultBasicConf: DeepReadonly<BasicConfType> = {
  label: '',
  componentWidth: '100%',
}
