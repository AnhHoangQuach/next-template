import { QueryClientProvider } from '@tanstack/react-query';
import { AppHooks, AppTheme } from 'containers';
import { SnackbarProvider } from 'notistack';
import { queryClient } from 'services';

const AppProvider = ({ children }) => {
  return (
    <SnackbarProvider variant='success' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
      <QueryClientProvider client={queryClient}>
        <AppHooks>
          <AppTheme>{children}</AppTheme>
        </AppHooks>
      </QueryClientProvider>
    </SnackbarProvider>
  );
};

export default AppProvider;
