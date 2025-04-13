import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { shallowCopy } from '@/utils'
import { Units, StylePropType } from '@/components/common/UnitStyleSelect'
import { ValueTypeForKey } from '@/utils'

/**
 * 全局的表单样式配置的状态管理
 */

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

export const defaultFormConf: FormConfStateType = {
  name: '',
  labelAlign: 'right',
  size: 'middle',
  labelSuffix: '',
  labelWidth: {
    number: -1,
    unit: Units.auto,
  },
  itemMaginBottom: {
    number: 10,
    unit: Units.px,
  },
  hideRequiredSymbol: false,
  showSubmitBtn: true,
  showResetBtn: false,
}

const INIT_STATE: FormConfStateType = defaultFormConf

export const formConfSlice = createSlice({
  name: 'formConf',
  initialState: INIT_STATE,
  reducers: {
    setFormConf: <K extends keyof FormConfStateType>(
      state: FormConfStateType,
      action: PayloadAction<{ key: K; value: ValueTypeForKey<FormConfStateType, K> }>
    ) => {
      const { key, value } = action.payload
      state[key] = shallowCopy(value)
    },
  },
})

export const { setFormConf } = formConfSlice.actions

export default formConfSlice.reducer
