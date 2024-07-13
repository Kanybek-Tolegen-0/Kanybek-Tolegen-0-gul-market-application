import { lazy } from 'react'
import { action } from './action'

export const entityPage = {
  Component: lazy(() => import('./entity-page')),
  action: action
}
