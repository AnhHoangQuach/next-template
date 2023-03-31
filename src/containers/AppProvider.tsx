import { QueryClientProvider } from '@tanstack/react-query';
import { Web3Modal } from '@web3modal/react';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { store } from 'reducers/store';
import { ethereumClient, queryClient, wagmiClient } from 'services';
import { WagmiConfig } from 'wagmi';
import { AppHooks } from '.';

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <SnackbarProvider variant='success' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <QueryClientProvider client={queryClient}>
          <WagmiConfig client={wagmiClient}>
            <AppHooks>{children}</AppHooks>
          </WagmiConfig>
          <Web3Modal projectId={'b39715e5520acd1ede1fa42d41dea6c9'} ethereumClient={ethereumClient} />
        </QueryClientProvider>
      </SnackbarProvider>
    </Provider>
  );
};

export default AppProvider;
