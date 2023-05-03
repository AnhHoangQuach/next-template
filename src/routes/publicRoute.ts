import { Home } from 'views/Home';
import { Market } from 'views/Market';
import { Rewards } from 'views/Rewards';
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
  swap: {
    path: '/swap',
    name: 'Swap',
    component: Swap,
  },
  rewards: {
    path: '/rewards',
    name: 'Rewards',
    component: Rewards,
  },
};

export default publicRoute;
