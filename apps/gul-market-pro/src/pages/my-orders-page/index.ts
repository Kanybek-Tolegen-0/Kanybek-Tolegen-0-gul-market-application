import { lazy } from 'react'
import { action } from './action'
import { loader } from './loader'

export const myOrdersPage = {
  Component: lazy(() => import('./my-orders-page')),
  action,
  loader
}
