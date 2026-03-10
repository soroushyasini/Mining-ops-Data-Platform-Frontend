import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Tooltip,
  Typography,
} from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import MODULE_REGISTRY from '@/modules/registry'
import { useUIStore } from '@/store/uiStore'

const DRAWER_WIDTH = 240
const DRAWER_COLLAPSED_WIDTH = 64

const Sidebar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { sidebarOpen } = useUIStore()

  const enabledModules = MODULE_REGISTRY.filter((m) => m.enabled && m.showInSidebar)

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        width: sidebarOpen ? DRAWER_WIDTH : DRAWER_COLLAPSED_WIDTH,
        flexShrink: 0,
        transition: 'width 0.2s ease',
        '& .MuiDrawer-paper': {
          width: sidebarOpen ? DRAWER_WIDTH : DRAWER_COLLAPSED_WIDTH,
          boxSizing: 'border-box',
          overflowX: 'hidden',
          transition: 'width 0.2s ease',
          borderLeft: '1px solid',
          borderColor: 'divider',
          top: 64, // AppBar height
          height: 'calc(100% - 64px)',
        },
      }}
    >
      {sidebarOpen && (
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography variant="caption" color="text.secondary" fontWeight={600}>
            ناوبری
          </Typography>
        </Box>
      )}

      <Divider />

      <List disablePadding sx={{ pt: 1 }}>
        {enabledModules.map((module) => {
          const Icon = module.icon
          const active = isActive(module.path)

          return (
            <ListItem key={module.id} disablePadding sx={{ display: 'block' }}>
              <Tooltip
                title={!sidebarOpen ? module.nameFa : ''}
                placement="left"
                arrow
              >
                <ListItemButton
                  onClick={() => handleNavigate(module.path)}
                  selected={active}
                  sx={{
                    minHeight: 48,
                    justifyContent: sidebarOpen ? 'initial' : 'center',
                    px: 2.5,
                    mx: 1,
                    mb: 0.5,
                    borderRadius: 2,
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      '& .MuiListItemIcon-root': {
                        color: 'primary.contrastText',
                      },
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: sidebarOpen ? 2 : 'auto',
                      justifyContent: 'center',
                      color: active ? 'inherit' : 'text.secondary',
                    }}
                  >
                    <Icon fontSize="small" />
                  </ListItemIcon>
                  {sidebarOpen && (
                    <ListItemText
                      primary={module.nameFa}
                      primaryTypographyProps={{
                        variant: 'body2',
                        fontWeight: active ? 700 : 400,
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          )
        })}
      </List>
    </Drawer>
  )
}

export default Sidebar
