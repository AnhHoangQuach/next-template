import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';

const Home = () => {
  const router = useRouter();

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log(counter);
  }, []);

  return (
    <Container maxWidth='lg'>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>

      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={'/favicon.ico'} width='120px' className='my-6' />
        <Typography variant='h4' component='h1' gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Link href={'/airdrop'}>Airdrop</Link>
        <Link href={'/faucet'}>Faucet</Link>
      </Box>
    </Container>
  );
};

export default Home;
