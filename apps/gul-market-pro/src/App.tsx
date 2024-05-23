import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './providers/routes'

export function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}
