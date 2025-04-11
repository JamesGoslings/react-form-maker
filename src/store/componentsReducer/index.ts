import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType } from '@/components/innerComponents'

export type ComponentInfoType = {
  fe_id: string
  type: string
  props: ComponentPropsType
}

export type ComponentsStateType = {
  selectedId?: string
  componentList: ComponentInfoType[]
}
/**
 * 用于操作状态中的 componentList 的参数类型
 */
export type ComponentActionParams = {
  index: number
  ComponentInfo: ComponentInfoType
}

const INIT_STATE: ComponentsStateType = {
  selectedId: '',
  componentList: [],
}

export const componentsSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件
    resetComponents(state: ComponentsStateType, action: PayloadAction<ComponentsStateType>) {
      return action.payload
    },
    // 修改 当前画布选中的组件id
    setSelectedId(state: ComponentsStateType, action: PayloadAction<string>) {
      state.selectedId = action.payload
    },
    // 给指定下标添加一个组件info
    addComponent(state: ComponentsStateType, action: PayloadAction<ComponentActionParams>) {
      const { index, ComponentInfo } = action.payload
      state.componentList.splice(index, 0, ComponentInfo)
    },
    // 通过索引交换两个组件的位置
    swapComponentLocation(
      state: ComponentsStateType,
      action: PayloadAction<{ from: number; to: number }>
    ) {
      const { from, to } = action.payload
      const list = state.componentList
      if (from === to || from < 0 || to < 0 || from >= list.length || to >= list.length) {
        return
      }
      ;[list[from], list[to]] = [list[to], list[from]]
    },
  },
})

export const { resetComponents, setSelectedId, addComponent, swapComponentLocation } =
  componentsSlice.actions

export default componentsSlice.reducer
