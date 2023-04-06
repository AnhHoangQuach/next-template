import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { default as Marquee } from 'react-fast-marquee';

const Mapple = () => {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <Marquee pauseOnHover play={false} gradient={false} speed={60}>
      <h5 className='mx-auto p-2 font-bold text-white'>
        Claim AGI token airdrop from token generation event on April 5th!
      </h5>
      <IconButton size='small' className='absolute right-0' onClick={() => setVisible(false)}>
        <Close className='text-white' />
      </IconButton>
    </Marquee>
  ) : (
    <></>
  );
};

export default Mapple;
