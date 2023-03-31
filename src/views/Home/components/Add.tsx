import { Button } from '@mui/material';
import { BoxAbi } from 'contracts';
import { enqueueSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { addComment } from 'reducers/commentSlice';
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';

const Add = () => {
  const dispatch = useDispatch();

  const { config } = usePrepareContractWrite({
    address: '0xbd6d22c824578a7A835392bE31eD77B74A235262',
    abi: BoxAbi,
    functionName: 'buyBox',
    args: ['10', '123412214124'],
  });
  const { data: tx, isLoading, isSuccess, writeAsync, write } = useContractWrite(config);

  const { data } = useContractRead({
    address: '0xbd6d22c824578a7A835392bE31eD77B74A235262',
    abi: BoxAbi,
    functionName: 'seasons',
    args: ['10'],
  });

  const handleWhite = async () => {};

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
          handleWhite();
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default Add;
