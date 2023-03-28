import { Airdrop } from 'views/Airdrop';
import { Faucet } from 'views/Faucet';
import { Home } from 'views/Home';

const publicRoute = {
  home: {
    path: '/',
    name: '',
    component: Home,
  },
  faucet: {
    path: '/faucet',
    name: 'Faucet',
    component: Faucet,
  },
  airdrop: {
    path: '/airdrop',
    name: 'Airdrop',
    component: Airdrop,
  },
  eligibility: {
    path: '/eligibility',
    name: '',
    component: Airdrop,
  },
};

export default publicRoute;
