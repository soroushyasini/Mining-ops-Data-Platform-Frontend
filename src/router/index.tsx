import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from '@/layout/AppLayout'
import NotFound from '@/shared/components/NotFound'
import LoadingSpinner from '@/shared/components/LoadingSpinner'
import ErrorBoundary from '@/shared/components/ErrorBoundary'
import MODULE_REGISTRY from '@/modules/registry'

// Build routes from module registry
const moduleRoutes = MODULE_REGISTRY.filter((m) => m.enabled).map((module) => ({
  path: module.path === '/' ? '' : module.path,
  index: module.path === '/',
  element: (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner fullHeight message="در حال بارگذاری ماژول..." />}>
        <module.component />
      </Suspense>
    </ErrorBoundary>
  ),
}))

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      ...moduleRoutes,
      { path: '*', element: <NotFound /> },
    ],
  },
])

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
