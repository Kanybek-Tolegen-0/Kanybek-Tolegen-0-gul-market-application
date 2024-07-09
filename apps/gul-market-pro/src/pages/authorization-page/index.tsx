import { lazy } from 'react'
import { action } from './action'

export const authorizationPage = {
  Component: lazy(() => import('./authorization-page')),
  action
}
