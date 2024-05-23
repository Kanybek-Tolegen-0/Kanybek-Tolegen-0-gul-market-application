import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/login-page'

export const routes = (
  <Routes>
    <Route path="/" element={<LoginPage />} />
  </Routes>
)
