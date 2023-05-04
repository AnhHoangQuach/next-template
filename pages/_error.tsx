import { Box, Button } from '@mui/material';
import { NextLink } from 'components/next';
import { publicRoute } from 'routes';

export const getInitialProps = ({ res, err }) => {
  console.warn({ res, err });
};

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      }}
    >
      <h1 className='text-3xl font-bold text-neutral-secondary'>
        An unexpected error occurred, please try again later.
      </h1>

      <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        <NextLink href={publicRoute.home.path}>
          <Button size='large' variant='text'>
            BACK TO HOME
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
};

export default Home;
