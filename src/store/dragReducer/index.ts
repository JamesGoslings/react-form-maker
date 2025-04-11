import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/**
 * 拖拽相关状态管理
 */

/**
 * 拖拽模式
 */
export enum DragModeTypes {
  LIBRARY = 'library', // 物料区的拖拽
  CANVAS = 'canvas', // 画布内部的拖拽
}

export type DragStateType = {
  draggingCompoentType: string
  dragMode?: DragModeTypes | null
}

const INIT_STATE: DragStateType = {
  draggingCompoentType: '',
}

export const dragSlice = createSlice({
  name: 'drag',
  initialState: INIT_STATE,
  reducers: {
    // 修改状态中记录的当前正在拖拽的组件的 type 字段
    setDraggingCompoentType(state: DragStateType, action: PayloadAction<string>) {
      state.draggingCompoentType = action.payload
    },
    // 修改拖拽模式
    chanageDragMode(state: DragStateType, action: PayloadAction<DragModeTypes | undefined | null>) {
      state.dragMode = action.payload
    },
  },
})

export const { setDraggingCompoentType, chanageDragMode } = dragSlice.actions

export default dragSlice.reducer
