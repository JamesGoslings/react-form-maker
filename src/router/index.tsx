import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import ManageLayout from '../layout/ManageLayout'
import Edit from '../pages/Edit'
import AllForm from '../pages/AllForm'
import StarForm from '@/pages/StarForm'
import Recycle from '@/pages/Recycle'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/manage/allForm" replace />,
        // element: <Home />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'allForm',
            element: <AllForm />,
          },
          {
            path: 'starForm',
            element: <StarForm />,
          },
          {
            path: 'recycle',
            element: <Recycle />,
          },
        ],
      },
    ],
  },
  {
    path: 'edit',
    element: <Edit />,
  },
])

export default router
