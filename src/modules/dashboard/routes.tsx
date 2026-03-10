import React from 'react'
import { Box, Typography, Chip, Grid, Card, CardContent } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import ScienceIcon from '@mui/icons-material/Science'
import PaymentsIcon from '@mui/icons-material/Payments'

const DashboardPage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <DashboardIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        <Box>
          <Typography variant="h5" fontWeight={700}>
            داشبورد
          </Typography>
          <Chip label="در دست توسعه" color="warning" size="small" sx={{ mt: 0.5 }} />
        </Box>
      </Box>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        خوش آمدید به پلتفرم عملیات معدن. از منوی راست می‌توانید به ماژول‌های مختلف دسترسی داشته باشید.
      </Typography>

      <Grid container spacing={2}>
        {[
          { icon: LocalShippingIcon, label: 'بارنامه‌های کامیون', color: '#8B6914' },
          { icon: ScienceIcon, label: 'آزمایشگاه', color: '#1B4D5C' },
          { icon: PaymentsIcon, label: 'پرداخت‌ها', color: '#2E7D32' },
        ].map(({ icon: Icon, label, color }) => (
          <Grid item xs={12} sm={6} md={4} key={label}>
            <Card sx={{ borderTop: `4px solid ${color}` }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Icon sx={{ fontSize: 36, color }} />
                <Typography variant="subtitle1" fontWeight={600}>
                  {label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default DashboardPage
