import { Button } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { addComment } from 'reducers/commentSlice';

const Add = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        onClick={() => {
          enqueueSnackbar('Hello Snacker');
          dispatch(
            addComment({
              comment: 'New Commit ' + Math.random(),
              username: 'Laurel Admir',
            }),
          );
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default Add;
