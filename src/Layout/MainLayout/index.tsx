import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
const MainLayout: FC = function () {
  return (
    <>
      <div>MainLayout-Header</div>
      <Outlet />
    </>
  )
}
export default MainLayout
