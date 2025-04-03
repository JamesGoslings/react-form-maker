import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/**
 * 拖拽相关状态管理
 */

export type DragStateType = {
  dragingCompoentType: string
}

const INIT_STATE: DragStateType = {
  dragingCompoentType: '',
}

export const dragSlice = createSlice({
  name: 'drag',
  initialState: INIT_STATE,
  reducers: {
    // 修改状态中记录的当前正在拖拽的组件的 type 字段
    setDragingCompoentType(state: DragStateType, action: PayloadAction<string>) {
      state.dragingCompoentType = action.payload
    },
  },
})

export const { setDragingCompoentType } = dragSlice.actions

export default dragSlice.reducer
