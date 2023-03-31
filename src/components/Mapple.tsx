import { default as Marquee } from 'react-fast-marquee';

const Mapple = () => {
  return (
    <Marquee pauseOnHover gradient={false} speed={60} className='bg-primary-main'>
      <h5 className='font-bold text-white lg:p-2 p-1'>
        Use faucet and claim airdrop on Testnet to whitelist for retroactive airdrop at token generation event on April
        5th!
      </h5>
    </Marquee>
  );
};

export default Mapple;
