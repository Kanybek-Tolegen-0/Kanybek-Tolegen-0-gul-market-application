import { lazy } from 'react'
import { action } from './action'

export const loginPage = {
  Component: lazy(() => import('./login-page')),
  action: action
}
