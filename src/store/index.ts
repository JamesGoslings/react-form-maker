import { configureStore } from '@reduxjs/toolkit'
import componentsReducer, { ComponentsStateType } from './componentsReducer'
import dragReducer, { DragStateType } from './dragReducer'

export type StateType = {
  components: ComponentsStateType
  drag: DragStateType
}

const store = configureStore({
  reducer: {
    components: componentsReducer,
    drag: dragReducer,
  },
})

export default store

// 导出 dispatch 类型
export type AppDispatch = typeof store.dispatch
