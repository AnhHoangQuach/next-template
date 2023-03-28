import dynamic from 'next/dynamic';

export { default as PopupNetwork } from './PopupNetwork';
export { default as PopupAccount } from './PopupAccount';

export const ConnectWallet = dynamic(() => import('./ConnectWallet'), { ssr: false });
