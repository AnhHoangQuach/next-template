import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { CssBaseline, LinearProgress, PaletteMode, ThemeProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type { } from '@mui/x-data-grid/themeAugmentation';
import { GridEmpty } from 'components/common';
import { Roboto_Flex } from 'next/font/google';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { themeSelector } from 'reducers/themeSlice';

const appFont = Roboto_Flex({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Roboto', 'Arial', 'sans-serif'],
});

const createAppTheme = (mode?: PaletteMode) =>
  createTheme({
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: 'lg',
        },
      },
      MuiButton: {
        defaultProps: {
          size: 'medium',
          variant: 'contained',
          color: 'primary',
          disableElevation: true,
        },
        styleOverrides: {
          sizeLarge: { minHeight: 48, minWidth: 48, fontSize: 18 },
          sizeMedium: { minHeight: 40, minWidth: 40, fontSize: 16 },
          sizeSmall: { minHeight: 32, minWidth: 32, fontSize: 14 },
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
          getRowHeight: () => 'auto',
          slots: {
            noRowsOverlay: GridEmpty,
            loadingOverlay: LinearProgress,
            columnSortedAscendingIcon: ArrowDropUp,
            columnSortedDescendingIcon: ArrowDropDown,
          },
          showCellVerticalBorder: true,
          showColumnVerticalBorder: true,
        },
      },
    },
    typography: {
      fontFamily: appFont.style.fontFamily,
      button: { fontWeight: 700, textTransform: 'none' },
    },
    palette: {
      primary: {
        main: '#725dff',
      },
      secondary: {
        main: '#009688',
      },
      mode,
    },
    shape: {
      borderRadius: 8,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1400,
      },
    },
  });

const AppTheme = ({ children }) => {
  const { mode } = useSelector(themeSelector);

  useEffect(() => {
    document.body.dataset.theme = mode;
    document.body.className = mode;
  }, [mode]);

  return (
    <ThemeProvider theme={responsiveFontSizes(createAppTheme(mode))}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
