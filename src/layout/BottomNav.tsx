import React from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import MODULE_REGISTRY from '@/modules/registry'

const BottomNav: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Only show modules configured for bottom nav (max 5 items)
  const bottomNavModules = MODULE_REGISTRY.filter((m) => m.enabled && m.showInBottomNav).slice(0, 5)

  const getCurrentValue = () => {
    const match = bottomNavModules.find((m) => {
      if (m.path === '/') return location.pathname === '/'
      return location.pathname.startsWith(m.path)
    })
    return match?.path ?? false
  }

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
      elevation={3}
    >
      <BottomNavigation
        value={getCurrentValue()}
        onChange={(_, newValue: string) => navigate(newValue)}
        showLabels
        sx={{
          '& .MuiBottomNavigationAction-root': {
            minWidth: 60,
            '&.Mui-selected': {
              color: 'primary.main',
            },
          },
          '& .MuiBottomNavigationAction-label': {
            fontSize: '0.65rem',
            fontFamily: 'Vazirmatn, sans-serif',
          },
        }}
      >
        {bottomNavModules.map((module) => {
          const Icon = module.icon
          return (
            <BottomNavigationAction
              key={module.id}
              label={module.nameFa}
              value={module.path}
              icon={<Icon fontSize="small" />}
            />
          )
        })}
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNav
