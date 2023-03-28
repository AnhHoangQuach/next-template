import { Container } from '@mui/material';
import { Add, Comments } from './components';

const Home = () => {
  return (
    <Container className='py-6'>
      <Add />
      <Comments />
    </Container>
  );
};

export default Home;
