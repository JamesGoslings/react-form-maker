import { configureStore } from '@reduxjs/toolkit'
import componentsReducer, { ComponentsStateType } from './componentsReducer'
import dragReducer, { DragStateType } from './dragReducer'
import formConfReducer, { FormConfStateType } from './formConfReducer'

export type StateType = {
  components: ComponentsStateType
  drag: DragStateType
  formConf: FormConfStateType
}

const store = configureStore({
  reducer: {
    components: componentsReducer,
    drag: dragReducer,
    formConf: formConfReducer,
  },
})

export default store

// 导出 dispatch 类型
export type AppDispatch = typeof store.dispatch
