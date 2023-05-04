import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { default as Marquee } from 'react-fast-marquee';

type Props = {
  hidden?: boolean;
};

const Mapple = ({ hidden }: Props) => {
  const [visible, setVisible] = useState(hidden ? false : true);

  return visible ? (
    <Marquee pauseOnHover play={false} gradient={false} speed={60}>
      <h5 className='mx-auto p-2 font-bold text-neutral-primary'>
        Claim AGI token airdrop from token generation event on April 5th!
      </h5>
      <IconButton size='small' className='absolute right-0' onClick={() => setVisible(false)}>
        <Close className='text-neutral-primary' />
      </IconButton>
    </Marquee>
  ) : (
    <></>
  );
};

export default Mapple;
