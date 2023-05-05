import { Dashboard } from 'views/Dashboard';
import { Home } from 'views/Home';
import { Market } from 'views/Market';
import { Rewards } from 'views/Rewards';
import { Swap } from 'views/Swap';
import Deposit from '../views/Deposit';

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
  assetsView: {
    url: (address: Address) => `/assets/${address}`,
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
  rewards: {
    path: '/rewards',
    name: 'Rewards',
    component: Rewards,
  },
  swap: {
    path: '/swap',
    name: 'Swap',
    component: Swap,
  },
};

export default publicRoute;
