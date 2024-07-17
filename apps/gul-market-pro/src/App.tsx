import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <Suspense>
      <RouterProvider router={routes} />
    </Suspense>
  )
}
