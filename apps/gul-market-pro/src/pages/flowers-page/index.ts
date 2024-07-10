import { lazy } from 'react'
import { action } from './action'

export const flowersPage = {
  Component: lazy(() => import('./flowers-page')),
  action
}
