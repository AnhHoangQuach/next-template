import { CssBaseline, LinearProgress, ThemeProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { GridEmpty } from 'components';
import { Roboto } from 'next/font/google';

export const appFont = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const appTheme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'large',
        variant: 'contained',
        color: 'primary',
        disableElevation: true,
      },
      styleOverrides: {
        sizeLarge: { minHeight: 48, minWidth: 48 },
        sizeMedium: { minHeight: 40, minWidth: 40 },
        sizeSmall: { minHeight: 32, minWidth: 32 },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiPagination: {
      defaultProps: {
        variant: 'outlined',
        shape: 'rounded',
        size: 'large',
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'medium',
        InputLabelProps: { shrink: true },
      },
    },
    MuiDialog: {
      defaultProps: {
        maxWidth: 'sm',
        fullWidth: true,
      },
    },
    MuiDataGrid: {
      defaultProps: {
        autoHeight: true,
        disableColumnMenu: true,
        hideFooter: true,
        rowSelection: false,
        rowHeight: 88,
        slots: {
          loadingOverlay: LinearProgress,
          noRowsOverlay: GridEmpty,
        },
        showCellVerticalBorder: true,
        showColumnVerticalBorder: true,
      },
    },
  },
  typography: {
    fontFamily: appFont.style.fontFamily,
    button: { fontWeight: 700, textTransform: 'none' },
    h3: { fontWeight: 700, fontSize: 30 },
    h6: { fontWeight: 700, fontSize: 16 },
  },
  palette: {
    primary: {
      main: '#17479d',
    },
    secondary: {
      main: '#673ab7',
    },
    mode: 'light',
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1600,
    },
  },
});

const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={responsiveFontSizes(appTheme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
