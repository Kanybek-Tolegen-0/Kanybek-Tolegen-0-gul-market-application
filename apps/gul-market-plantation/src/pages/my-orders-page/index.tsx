import { lazy } from 'react'
import { loader } from './loader'
import { action } from './action'

export const myOrdersPage = {
  Component: lazy(() => import('./my-orders-page')),
  loader,
  action
}
