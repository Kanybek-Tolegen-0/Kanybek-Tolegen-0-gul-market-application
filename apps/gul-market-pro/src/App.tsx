import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { Layout } from '@design-system/ui'

export function App() {
  return (
    <Layout>
      <Layout.Content>
        <RouterProvider router={routes} />
      </Layout.Content>
    </Layout>
  )
}
