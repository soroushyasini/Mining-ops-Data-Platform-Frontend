import { createTheme } from '@mui/material/styles'

// Extend MUI typography with Vazirmatn Persian font
declare module '@mui/material/styles' {
  interface TypographyVariants {
    persianNumber: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    persianNumber?: React.CSSProperties
  }
}

const theme = createTheme({
  direction: 'rtl',

  palette: {
    mode: 'light',
    primary: {
      main: '#8B6914',        // Dark gold/amber — fitting for a gold mining operation
      light: '#B8932A',
      dark: '#5D4409',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1B4D5C',        // Professional dark teal
      light: '#2A7A91',
      dark: '#0D2E38',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F5F5F0',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#5A5A5A',
    },
    error: {
      main: '#C62828',
    },
    warning: {
      main: '#E65100',
    },
    success: {
      main: '#2E7D32',
    },
    info: {
      main: '#0277BD',
    },
  },

  typography: {
    fontFamily: 'Vazirmatn, IRANSans, Tahoma, Arial, sans-serif',
    h1: { fontWeight: 700, fontSize: '2rem' },
    h2: { fontWeight: 700, fontSize: '1.75rem' },
    h3: { fontWeight: 600, fontSize: '1.5rem' },
    h4: { fontWeight: 600, fontSize: '1.25rem' },
    h5: { fontWeight: 600, fontSize: '1.1rem' },
    h6: { fontWeight: 600, fontSize: '1rem' },
    body1: { fontSize: '0.95rem', lineHeight: 1.7 },
    body2: { fontSize: '0.875rem', lineHeight: 1.6 },
    button: { fontWeight: 600, textTransform: 'none' },
    persianNumber: {
      fontFamily: 'Vazirmatn, sans-serif',
      fontVariantNumeric: 'normal',
    },
  },

  shape: {
    borderRadius: 8,
  },

  spacing: 8,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingTop: 8,
          paddingBottom: 8,
          fontFamily: 'Vazirmatn, sans-serif',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'Vazirmatn, sans-serif',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'Vazirmatn, sans-serif',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderLeft: 'none',
        },
      },
    },
  },
})

export default theme
