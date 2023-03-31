import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
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
        maxWidth: 'xs',
        fullWidth: true,
      },
    },
  },
  typography: {
    fontFamily: appFont.style.fontFamily,
    button: { fontWeight: 700, textTransform: 'none' },
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
