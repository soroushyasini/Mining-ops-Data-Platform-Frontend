import { useTheme } from '@mui/material/styles'

/**
 * RTL-aware spacing helpers for the Persian/Arabic layout.
 * Returns helpers that account for RTL direction.
 */
const useRTL = () => {
  const theme = useTheme()
  const isRTL = theme.direction === 'rtl'

  return {
    isRTL,
    /** Margin start (right in RTL, left in LTR) */
    ms: (value: number | string) => ({
      ...(isRTL ? { marginRight: value } : { marginLeft: value }),
    }),
    /** Margin end (left in RTL, right in LTR) */
    me: (value: number | string) => ({
      ...(isRTL ? { marginLeft: value } : { marginRight: value }),
    }),
    /** Padding start (right in RTL, left in LTR) */
    ps: (value: number | string) => ({
      ...(isRTL ? { paddingRight: value } : { paddingLeft: value }),
    }),
    /** Padding end (left in RTL, right in LTR) */
    pe: (value: number | string) => ({
      ...(isRTL ? { paddingLeft: value } : { paddingRight: value }),
    }),
    /** Start position (right in RTL, left in LTR) */
    start: isRTL ? 'right' : 'left',
    /** End position (left in RTL, right in LTR) */
    end: isRTL ? 'left' : 'right',
    /** Anchor for MUI Drawer */
    drawerAnchor: isRTL ? ('right' as const) : ('left' as const),
  }
}

export default useRTL
