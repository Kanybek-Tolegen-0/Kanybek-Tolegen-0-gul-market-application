import { lazy } from 'react'
import { loader } from './loader'
import { action } from './action'

export const profilePage = {
  Component: lazy(() => import('./profile-page')),
  loader,
  action
}
