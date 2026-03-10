import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

interface LoadingSpinnerProps {
  message?: string
  fullHeight?: boolean
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = 'در حال بارگذاری...',
  fullHeight = false,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        p: 4,
        minHeight: fullHeight ? '60vh' : 'auto',
      }}
    >
      <CircularProgress color="primary" />
      {message && (
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      )}
    </Box>
  )
}

export default LoadingSpinner
