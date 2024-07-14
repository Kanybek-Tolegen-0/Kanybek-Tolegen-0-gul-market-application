import { lazy } from 'react'
import { loader } from './loader'

export const dashboard = {
  Component: lazy(() => import('./dashboard')),
  loader: loader
}
