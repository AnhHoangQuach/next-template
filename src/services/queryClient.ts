import { QueryClient } from '@tanstack/react-query';
import { gtag } from 'ga-gtag';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 60 * 1000,
      refetchOnMount: 'always',
    },
    mutations: {
      onError: (error: ContractError) => {
        const wagmiStore = JSON.parse(localStorage.getItem('wagmi.store')!);

        gtag('event', `error_${error.message.slice(0, 32)}`, {
          code: error.code,
          message: error.message,
          href: window.location.href,
          address: wagmiStore?.state.data.account,
        });
      },
    },
  },
});
