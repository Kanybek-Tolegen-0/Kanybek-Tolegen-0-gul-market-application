import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import '@design-system/ui/ui/index.css'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)

module.hot?.accept()
