import React, { FC } from 'react'
import { Header } from '../header'

const Content: FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`px-[120px] pb-16 ${className}`}>{children}</div>
)

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col">
    <Header />
    {children}
  </div>
)

Layout.Content = Content
