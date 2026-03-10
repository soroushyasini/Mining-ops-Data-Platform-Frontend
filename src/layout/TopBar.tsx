import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useUIStore } from '@/store/uiStore'

interface TopBarProps {
  isMobile: boolean
}

const TopBar: React.FC<TopBarProps> = ({ isMobile }) => {
  const { toggleSidebar } = useUIStore()
  const appName = import.meta.env.VITE_APP_NAME || 'پلتفرم عملیات معدن'

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'primary.dark',
      }}
    >
      <Toolbar>
        {(!isMobile) && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleSidebar}
            sx={{ ml: 1, mr: 2 }}
            aria-label="باز/بسته کردن منو"
          >
            <MenuIcon />
          </IconButton>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1 }}>
          <Box
            component="img"
            src="/icons/icon-192.svg"
            alt="لوگو"
            sx={{ width: 32, height: 32, borderRadius: 1 }}
          />
          <Typography
            variant="h6"
            component="div"
            fontWeight={700}
            sx={{ letterSpacing: '0.02em' }}
          >
            {appName}
          </Typography>
        </Box>

        <Typography variant="caption" color="rgba(255,255,255,0.6)">
          v{import.meta.env.VITE_APP_VERSION || '1.0.0'}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
