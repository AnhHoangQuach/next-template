import { Borrow, BorrowAsset } from 'views/Borrow';
import { Dashboard } from 'views/Dashboard';
import { Deposit } from 'views/Deposit';
import { Home } from 'views/Home';
import { Market } from 'views/Market';
import { Swap } from 'views/Swap';

const publicRoute = {
  home: {
    path: '/',
    name: '',
    component: Home,
  },
  market: {
    path: '/market',
    name: 'Market',
    component: Market,
  },
  dashboard: {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },

  deposit: {
    path: '/deposit',
    name: 'Deposit',
    component: Deposit,
  },
  depositAsset: {
    path: '/deposit/:address',
    url: ({ address }: ByAddress) => `/deposit/${address}`,
    name: 'Deposit Asset',
    component: Deposit,
  },

  borrow: {
    path: '/borrow',
    name: 'Borrow',
    component: Borrow,
  },
  borrowAsset: {
    path: '/borrow/:address',
    url: ({ address }: ByAddress) => `/borrow/${address}`,
    name: 'Borrow Asset',
    component: BorrowAsset,
  },

  swap: {
    path: '/swap',
    name: 'Components',
    component: Swap,
  },
};

export default publicRoute;
