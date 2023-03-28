import { Box, Button, Typography } from '@mui/material';
import { PublicLayout } from 'layouts';
import Link from 'next/link';
import { publicRoute } from 'routes';

export const getInitialProps = ({ res, err }) => {
  console.warn({ res, err });
};

const Home = () => {
  return (
    <PublicLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
        }}
      >
        <Typography variant='h4' component='h1' color='secondary'>
          An unexpected error occurred, please try again later.
        </Typography>

        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Link href={publicRoute.home.path}>
            <Button size='large' variant='outlined'>
              BACK TO HOME
            </Button>
          </Link>
        </Box>
      </Box>
    </PublicLayout>
  );
};

export default Home;
