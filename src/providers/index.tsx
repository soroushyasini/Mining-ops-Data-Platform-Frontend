import React from 'react'
import ThemeProvider from './ThemeProvider'
import QueryProvider from './QueryProvider'

interface AppProvidersProps {
  children: React.ReactNode
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </ThemeProvider>
  )
}

export default AppProviders
