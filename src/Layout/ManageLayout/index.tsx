import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
const ManageLayout: FC = function () {
  return (
    <>
      <div>ManageLayout-Header</div>
      <Outlet />
    </>
  )
}
export default ManageLayout
