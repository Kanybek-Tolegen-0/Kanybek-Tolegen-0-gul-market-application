import React from 'react'
import { WithHeader, LoginCard } from '@design-system/ui'

export const LoginPage = () => (
  <WithHeader
    Component={
      <div className="px-24">
        <LoginCard />
      </div>
    }
  />
)
