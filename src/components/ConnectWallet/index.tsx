import dynamic from 'next/dynamic';

export { default as PopupConnect } from './PopupConnect';
export { default as PopupAccount } from './PopupAccount';

export const ConnectWallet = dynamic(() => import('./ConnectWallet'), { ssr: false });
