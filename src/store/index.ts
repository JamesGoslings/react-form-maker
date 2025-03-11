import { configureStore } from "@reduxjs/toolkit";
import componentsReducer, { ComponentsStateType } from "./componentsReducer";

export type StateType = {
  components: ComponentsStateType;
};

const store = configureStore({
  reducer: {
    components: componentsReducer,
  },
});

export default store;