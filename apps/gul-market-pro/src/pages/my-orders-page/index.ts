import { lazy } from 'react'
import { action } from './action'

export const myOrdersPage = {
  Component: lazy(() => import('./my-orders-page')),
  action
}
