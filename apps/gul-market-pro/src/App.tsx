import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

export function App() {
  return (
    <Suspense>
      <RouterProvider router={routes} />
    </Suspense>
  )
}
