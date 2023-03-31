import { gtag, install } from 'ga-gtag';
import { useCallback, useEffect } from 'react';
import { useAccount } from 'wagmi';

const useSetupGA = (key: string = 'G-WB087MBQ5V') => {
  const { address } = useAccount();

  useEffect(() => {
    install(key);
  }, [key]);

  useEffect(() => {
    document.addEventListener('click', (e: any) => {
      if (e.srcElement.localName === 'a') {
        gtag('event', `click_${e.target.innerText}_${e.srcElement.href}`, {
          href: window.location.href,
          address: address?.toString(),
        });
      }
      if (e.srcElement.localName === 'button') {
        gtag('event', `click_${e.target.innerText}`, {
          href: window.location.href,
          address: address?.toString(),
        });
      }
    });
  }, [address]);
};

const useAnalytics = () => {
  const { address } = useAccount();

  const enqueueEvent = useCallback(
    (name: string) => {
      gtag('event', name, {
        href: window.location.href,
        address: address?.toString(),
      });
    },
    [address],
  );

  return { enqueueEvent };
};

export { useSetupGA, useAnalytics };
