import { Airdrop } from 'views/Airdrop';
import { Bride } from 'views/Bride';
import { Home } from 'views/Home';
import { Market } from 'views/Market';
import { Pools } from 'views/Pools';
import { Rewards } from 'views/Rewards';
import { Swap } from 'views/Swap';
import { Vest } from 'views/Vest';
import { Vote } from 'views/Vote';

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
  pools: {
    path: '/pools',
    name: 'Pools',
    component: Pools,
  },
  vest: {
    path: '/vest',
    name: 'Vest',
    component: Vest,
  },
  vote: {
    path: '/vote',
    name: 'Vote',
    component: Vote,
  },
  rewards: {
    path: '/rewards',
    name: 'Rewards',
    component: Rewards,
  },
  bride: {
    path: '/bride',
    name: 'Bride',
    component: Bride,
  },
  airdrop: {
    path: '/airdrop',
    name: 'Airdrop',
    component: Airdrop,
  },
};

export default publicRoute;
