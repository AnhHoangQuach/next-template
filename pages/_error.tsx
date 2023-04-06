import { Box, Button, Typography } from '@mui/material';
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
      <Typography variant='h3' component='h1' color='textSecondary'>
        An unexpected error occurred, please try again later.
      </Typography>

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
