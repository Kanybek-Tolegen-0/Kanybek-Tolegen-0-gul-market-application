import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

export function App() {
  console.log(process.env.API_BASE_URL)

  return <RouterProvider router={routes} />
}
