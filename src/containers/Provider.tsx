import { QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';
import { queryClient, wagmiClient } from 'services';
import { WagmiConfig } from 'wagmi';

type ContainerType = {
  children: React.ReactNode;
};

const Provider = ({ children }: ContainerType) => {
  return (
    <SnackbarProvider variant='success' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig client={wagmiClient}>
          <>{children}</>
        </WagmiConfig>
      </QueryClientProvider>
    </SnackbarProvider>
  );
};

export default Provider;
