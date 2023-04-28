import { LoadingButton } from '@mui/lab';
import { Button, Container } from '@mui/material';

const Swap = () => {
  return (
    <Container className='space-y-10 py-10'>
      <div className='flex gap-3'>
        <LoadingButton variant='contained' color='primary' loading>
          Spinning
        </LoadingButton>
        <LoadingButton variant='contained' color='primary'>
          LoadingButton
        </LoadingButton>
        <Button variant='contained' color='primary' disabled>
          DisabledButton
        </Button>

        <LoadingButton variant='contained' color='secondary' loading>
          Spinning{' '}
        </LoadingButton>
        <LoadingButton variant='contained' color='secondary'>
          LoadingButton
        </LoadingButton>
        <Button variant='contained' color='secondary' disabled>
          DisabledButton
        </Button>
      </div>

      <div className='flex gap-3'>
        <LoadingButton variant='outlined' color='primary' loading>
          Spinning
        </LoadingButton>
        <LoadingButton variant='outlined' color='primary'>
          LoadingButton
        </LoadingButton>
        <Button variant='outlined' color='primary' disabled>
          DisabledButton
        </Button>

        <LoadingButton variant='outlined' color='secondary' loading>
          Spinning
        </LoadingButton>
        <LoadingButton variant='outlined' color='secondary'>
          LoadingButton
        </LoadingButton>
        <Button variant='outlined' color='secondary' disabled>
          DisabledButton
        </Button>
      </div>

      <div className='flex gap-3'>
        <LoadingButton variant='contained' color='inherit' loading>
          Spinning
        </LoadingButton>
        <LoadingButton variant='contained' color='inherit'>
          LoadingButton
        </LoadingButton>
        <Button variant='contained' color='inherit' disabled>
          DisabledButton
        </Button>

        <LoadingButton variant='outlined' color='inherit' loading>
          Spinning
        </LoadingButton>
        <LoadingButton variant='outlined' color='inherit'>
          LoadingButton
        </LoadingButton>
        <Button variant='outlined' color='inherit' disabled>
          DisabledButton
        </Button>
      </div>
    </Container>
  );
};

export default Swap;
