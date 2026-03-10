import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import SearchOffIcon from '@mui/icons-material/SearchOff'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        minHeight: '70vh',
        p: 4,
      }}
    >
      <SearchOffIcon sx={{ fontSize: 80, color: 'text.secondary' }} />
      <Typography variant="h4" fontWeight={700} color="text.primary">
        ۴۰۴
      </Typography>
      <Typography variant="h6" color="text.secondary" textAlign="center">
        صفحه مورد نظر یافت نشد
      </Typography>
      <Typography variant="body2" color="text.secondary" textAlign="center" maxWidth={400}>
        صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/')} sx={{ mt: 1 }}>
        بازگشت به صفحه اصلی
      </Button>
    </Box>
  )
}

export default NotFound
