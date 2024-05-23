import React from 'react'
import { Header } from '../../components'

export const WithHeader = ({ Component }: { Component: React.ReactNode }) => (
  <>
    <Header />
    {Component}
  </>
)
