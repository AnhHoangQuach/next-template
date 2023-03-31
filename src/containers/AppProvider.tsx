import { RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { QueryClientProvider } from '@tanstack/react-query';
import { AppHooks } from 'containers';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { store } from 'reducers/store';
import { chains, queryClient, wagmiClient } from 'services';
import { WagmiConfig } from 'wagmi';

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <SnackbarProvider variant='success' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <QueryClientProvider client={queryClient}>
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains} theme={lightTheme({ accentColor: 'var(--color-primary-main)' })}>
              <AppHooks>{children}</AppHooks>
            </RainbowKitProvider>
          </WagmiConfig>
        </QueryClientProvider>
      </SnackbarProvider>
    </Provider>
  );
};

export default AppProvider;
