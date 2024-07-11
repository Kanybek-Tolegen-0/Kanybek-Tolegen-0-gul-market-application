import { lazy } from 'react'
import { action } from './action'

export const individualPage = {
  Component: lazy(() => import('./individual-page')),
  action
}
