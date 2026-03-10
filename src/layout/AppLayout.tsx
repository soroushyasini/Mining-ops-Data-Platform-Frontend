import React from 'react'
import { Box, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import BottomNav from './BottomNav'
import { Outlet } from 'react-router-dom'

const BOTTOM_NAV_HEIGHT = 56

const AppLayout: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Fixed top app bar */}
      <TopBar isMobile={isMobile} />

      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* Desktop: permanent sidebar on the right */}
        {!isMobile && <Sidebar />}

        {/* Main content area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            backgroundColor: 'background.default',
            minHeight: '100vh',
          }}
        >
          {/* Spacer for fixed AppBar */}
          <Toolbar />

          {/* Page content rendered here */}
          <Box
            sx={{
              pb: isMobile ? `${BOTTOM_NAV_HEIGHT + 16}px` : 2,
              minHeight: `calc(100vh - 64px)`,
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>

      {/* Mobile: fixed bottom navigation */}
      {isMobile && <BottomNav />}
    </Box>
  )
}

export default AppLayout
