import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';
import { QueryClientProvider } from '@tanstack/react-query';
import { AppHooks, AppTheme } from 'containers';
import { SnackbarProvider } from 'notistack';
import { useSelector } from 'react-redux';
import { themeSelector } from 'reducers/themeSlice';
import { chains, queryClient, wagmiClient } from 'services';
import { WagmiConfig } from 'wagmi';

const AppProvider = ({ children }) => {
  const { isDark } = useSelector(themeSelector);

  return (
    <SnackbarProvider variant='success' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={(isDark ? darkTheme : lightTheme)({ accentColor: 'var(--color-primary-main)' })}
          >
            <AppHooks>
              <AppTheme>{children}</AppTheme>
            </AppHooks>
          </RainbowKitProvider>
        </WagmiConfig>
      </QueryClientProvider>
    </SnackbarProvider>
  );
};

export default AppProvider;
