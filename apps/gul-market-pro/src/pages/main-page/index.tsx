import React, { useState, FC } from 'react'
import { Layout } from '@design-system/ui'
import './style.css'

export const MainPage: FC = props => {
  return (
    <Layout fullHeader isLogged>
      <Layout.Content>
        <div></div>
      </Layout.Content>
    </Layout>
  )
}
