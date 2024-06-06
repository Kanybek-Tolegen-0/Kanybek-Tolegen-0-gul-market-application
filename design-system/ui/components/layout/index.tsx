import React, { FC, ReactNode } from 'react'
import { Header } from '../header'

interface LayoutProps {
  children: ReactNode
  isLogged?: boolean
  fullHeader?: boolean
}

interface ContentProps {
  className?: string
  children: ReactNode
}

const Content: FC<ContentProps> = ({ className, children }) => (
  <div className={`px-[120px] pb-16 ${className}`}>{children}</div>
)

interface LayoutComponent extends FC<LayoutProps> {
  Content: FC<ContentProps>
}

const Layout: LayoutComponent = ({ children, isLogged = false, fullHeader = false }) => (
  <div className="flex flex-col">
    <Header isLogged={isLogged} fullHeader={fullHeader} />
    {children}
  </div>
)

Layout.Content = Content

export { Layout }
