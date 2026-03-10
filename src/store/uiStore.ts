import { create } from 'zustand'

interface UIState {
  sidebarOpen: boolean
  activeModule: string | null
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  setActiveModule: (moduleId: string | null) => void
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  activeModule: null,

  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),

  setActiveModule: (moduleId: string | null) => set({ activeModule: moduleId }),
}))
