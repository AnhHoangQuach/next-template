import { Container } from '@mui/material';
import { Add, Comments } from './components';

const Home = () => {
  return (
    <Container className='py-6'>
      <Add />
      <div className='text-xl font-bold underline'>HELLO</div>
      <Comments />
    </Container>
  );
};

export default Home;
