import { lazy } from 'react'
import { loader } from './loader'
import { action } from './action'

export const favoritePage = {
  Component: lazy(() => import('./favorite-page')),
  loader,
  action
}
