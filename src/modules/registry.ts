import React from 'react'
import { SvgIconComponent } from '@mui/icons-material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import ScienceIcon from '@mui/icons-material/Science'
import PaymentsIcon from '@mui/icons-material/Payments'
import BadgeIcon from '@mui/icons-material/Badge'
import DashboardIcon from '@mui/icons-material/Dashboard'

export interface ModuleDefinition {
  id: string
  nameFa: string
  icon: SvgIconComponent
  path: string
  component: React.LazyExoticComponent<React.ComponentType>
  enabled: boolean
  permissionKey: string
  showInSidebar: boolean
  showInBottomNav: boolean
  phase: 1 | 2 | 3 | 4 | 5
}

const MODULE_REGISTRY: ModuleDefinition[] = [
  {
    id: 'dashboard',
    nameFa: 'داشبورد',
    icon: DashboardIcon,
    path: '/',
    component: React.lazy(() => import('./dashboard/routes')),
    enabled: true,
    permissionKey: 'module:dashboard:read',
    showInSidebar: true,
    showInBottomNav: true,
    phase: 5,
  },
  {
    id: 'trucks',
    nameFa: 'بارنامه‌های کامیون',
    icon: LocalShippingIcon,
    path: '/trucks',
    component: React.lazy(() => import('./trucks/routes')),
    enabled: true,
    permissionKey: 'module:trucks:read',
    showInSidebar: true,
    showInBottomNav: true,
    phase: 1,
  },
  {
    id: 'bunkers',
    nameFa: 'حمل باکت',
    icon: WarehouseIcon,
    path: '/bunkers',
    component: React.lazy(() => import('./bunkers/routes')),
    enabled: true,
    permissionKey: 'module:bunkers:read',
    showInSidebar: true,
    showInBottomNav: true,
    phase: 1,
  },
  {
    id: 'grinding',
    nameFa: 'دفتر آسیاب',
    icon: PrecisionManufacturingIcon,
    path: '/grinding',
    component: React.lazy(() => import('./grinding/routes')),
    enabled: true,
    permissionKey: 'module:grinding:read',
    showInSidebar: true,
    showInBottomNav: true,
    phase: 1,
  },
  {
    id: 'lab',
    nameFa: 'آزمایشگاه',
    icon: ScienceIcon,
    path: '/lab',
    component: React.lazy(() => import('./lab/routes')),
    enabled: true,
    permissionKey: 'module:lab:read',
    showInSidebar: true,
    showInBottomNav: false,
    phase: 1,
  },
  {
    id: 'payments',
    nameFa: 'پرداخت‌ها',
    icon: PaymentsIcon,
    path: '/payments',
    component: React.lazy(() => import('./payments/routes')),
    enabled: true,
    permissionKey: 'module:payments:read',
    showInSidebar: true,
    showInBottomNav: false,
    phase: 1,
  },
  {
    id: 'drivers',
    nameFa: 'رانندگان و خودروها',
    icon: BadgeIcon,
    path: '/drivers',
    component: React.lazy(() => import('./drivers/routes')),
    enabled: true,
    permissionKey: 'module:drivers:read',
    showInSidebar: true,
    showInBottomNav: false,
    phase: 1,
  },
]

export default MODULE_REGISTRY
