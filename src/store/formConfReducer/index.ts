import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { shallowCopy } from '@/utils'

/**
 * 全局的表单样式配置的状态管理
 */

export enum Units {
  'px' = 'px',
  '%' = '%',
  'em' = 'em',
  'rem' = 'rem',
  'vw' = 'vw',
  'vh' = 'vh',
  'auto' = 'auto',
}
export interface StylePropType {
  number: number
  unit: Units
}

export interface FormConfStateType {
  /**
   * 表单名称，会作为表单字段 id 前缀使用
   */
  name: string
  /**
   * label 标签的文本对齐方式
   */
  labelAlign: 'left' | 'right' | 'top'
  /**
   * 设置字段组件的尺寸（仅限 antd 组件）
   */
  size: 'small' | 'middle' | 'large'
  /**
   * label 标签的后缀
   */
  labelSuffix: string
  /**
   * label 标签的宽度
   */
  labelWidth: StylePropType
  /**
   * 表单项的下边距
   */
  itemMaginBottom: StylePropType
  /**
   * 是否隐藏必选字段的点标记
   */
  hideRequiredSymbol: boolean
  /**
   * 是否显示提交按钮
   */
  showSubmitBtn: boolean
  /**
   * 是否显示重置按钮
   */
  showResetBtn: boolean
}

const INIT_STATE: FormConfStateType = {
  name: '',
  labelAlign: 'right',
  size: 'middle',
  labelSuffix: '',
  labelWidth: {
    number: 0,
    unit: Units.px,
  },
  itemMaginBottom: {
    number: 0,
    unit: Units.px,
  },
  hideRequiredSymbol: false,
  showSubmitBtn: true,
  showResetBtn: false,
}

// 定义一个映射类型，用于根据键类型获取对应的值类型
export type ValueTypeForKey<K extends keyof FormConfStateType> = FormConfStateType[K]

export const formConfSlice = createSlice({
  name: 'formConf',
  initialState: INIT_STATE,
  reducers: {
    setFormConf: <K extends keyof FormConfStateType>(
      state: FormConfStateType,
      action: PayloadAction<{ key: K; value: ValueTypeForKey<K> }>
    ) => {
      const { key, value } = action.payload
      state[key] = shallowCopy(value)
    },
  },
})

export const { setFormConf } = formConfSlice.actions

export default formConfSlice.reducer
