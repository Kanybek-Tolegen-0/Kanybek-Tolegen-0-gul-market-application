import { lazy } from 'react'
import { loader } from './loader'

export const chooseRolePage = {
  Component: lazy(() => import('./choose-role-page')),
  loader: loader
}
