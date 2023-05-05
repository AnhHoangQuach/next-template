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
  swap: {
    path: '/swap',
    name: 'Swap',
    component: Swap,
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
};

export default publicRoute;
