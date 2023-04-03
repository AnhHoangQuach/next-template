import { gtag, install } from 'ga-gtag';
import { useCallback, useEffect } from 'react';
import { useAccount } from 'wagmi';

const useSetupGA = (key: string = 'G-WB087MBQ5V') => {
  useEffect(() => {
    install(key);
  }, [key]);

  useEffect(() => {
    const wagmiStore = JSON.parse(localStorage.getItem('wagmi.store')!);
    const address = wagmiStore?.state.data.account;

    const sendGa = (event: MouseEvent) => {
      const element = event.target as HTMLElement;
      const content = element.innerText || element.getAttribute('title');

      if (element.tagName === 'A' || element.parentElement?.tagName === 'A') {
        const href = element.getAttribute('href');
        gtag('event', `click_${content}_${href}`, {
          url: window.location.href,
          address,
        });
      }
      if (element.tagName === 'BUTTON' || element.parentElement?.tagName === 'BUTTON') {
        gtag('event', `click_${content}`, {
          url: window.location.href,
          address,
        });
      }
    };
    document.addEventListener('click', sendGa);
    return () => {
      document.removeEventListener('click', sendGa);
    };
  }, []);
};

const useTracking = () => {
  const { address } = useAccount();

  const enqueueEvent = useCallback(
    (name: string) => {
      gtag('event', name, {
        url: window.location.href,
        address: address?.toString(),
      });
    },
    [address],
  );

  return { enqueueEvent };
};

export { useSetupGA, useTracking };
