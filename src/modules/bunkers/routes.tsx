import React from 'react'
import { Box, Typography, Chip } from '@mui/material'
import WarehouseIcon from '@mui/icons-material/Warehouse'

const BunkersPage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <WarehouseIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        <Box>
          <Typography variant="h5" fontWeight={700}>
            حمل باکت
          </Typography>
          <Chip label="در دست توسعه" color="warning" size="small" sx={{ mt: 0.5 }} />
        </Box>
      </Box>
      <Typography variant="body1" color="text.secondary">
        این ماژول در مرحله ۲ توسعه خواهد یافت.
      </Typography>
    </Box>
  )
}

export default BunkersPage
