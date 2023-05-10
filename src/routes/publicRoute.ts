import { Borrow, BorrowAsset } from 'views/Borrow';
import { Dashboard } from 'views/Dashboard';
import { Deposit } from 'views/Deposit';
import { Home } from 'views/Home';
import { Market } from 'views/Market';
import { RepayAsset } from 'views/Replay';
import { Swap } from 'views/Swap';
import { WithdrawAsset } from 'views/Withdraw';

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
    component: BorrowAsset,
  },

  repayAsset: {
    path: '/repay/:address',
    url: ({ address }: ByAddress) => `/repay/${address}`,
    component: RepayAsset,
  },
  withdrawAsset: {
    path: '/withdraw/:address',
    url: ({ address }: ByAddress) => `/withdraw/${address}`,
    component: WithdrawAsset,
  },

  swap: {
    path: '/swap',
    name: 'Components',
    component: Swap,
  },
};

export default publicRoute;
