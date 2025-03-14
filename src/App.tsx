import React from 'react'
import EditPage from './pages/Edit'
import { Provider } from 'react-redux'
import store from './store'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import '@/assets/font/iconfont.css'
import '@/styles/global.scss'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
        {/* <EditPage /> */}
      </Provider>
    </div>
  )
}

export default App
