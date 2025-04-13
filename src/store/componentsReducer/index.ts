import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType, ComponentType } from '@/components/innerComponents'
import { BasicConfType, defaultBasicConf } from '@/pages/Edit/ComponentConfig'
import { ValueTypeForKey } from '@/utils'

export type ComponentInfoType = {
  fe_id: string
  type: ComponentType
  props: ComponentPropsType
  hidden?: boolean
  basicProps?: BasicConfType
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

    // 移除指定id的组件
    deleteComponent(state, action: PayloadAction<{ fe_id: string }>) {
      const { fe_id } = action.payload
      const list = state.componentList
      const index = list.findIndex(item => item.fe_id === fe_id)
      if (index > -1) {
        list.splice(index, 1)
      }
    },

    // 隐藏某个组件
    hideComponent(state, action: PayloadAction<{ fe_id: string }>) {
      const { fe_id } = action.payload
      const component = state.componentList.find(item => item.fe_id === fe_id)
      if (component === undefined) {
        return
      }
      component.hidden = true
    },
    // 展示某个组件
    showComponent(state, action: PayloadAction<{ fe_id: string }>) {
      const { fe_id } = action.payload
      const component = state.componentList.find(item => item.fe_id === fe_id)
      if (component === undefined) {
        return
      }
      component.hidden = false
    },

    // 修改选中的组件的基础配置项
    setSelectedComponentBasicConf: <K extends keyof BasicConfType>(
      state: ComponentsStateType,
      action: PayloadAction<{ key: K; value: ValueTypeForKey<BasicConfType, K> }>
    ) => {
      const { key, value } = action.payload
      const component = state.componentList.find(({ fe_id }) => fe_id === state.selectedId)
      if (!component) {
        return
      }
      if (!component.basicProps) {
        component.basicProps = { ...defaultBasicConf }
      }
      component.basicProps[key] = value
    },
  },
})

export const {
  resetComponents,
  setSelectedId,
  addComponent,
  swapComponentLocation,
  deleteComponent,
  hideComponent,
  showComponent,
  setSelectedComponentBasicConf,
} = componentsSlice.actions

export default componentsSlice.reducer
