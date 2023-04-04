import { LoadingButton } from '@mui/lab';
import { Avatar, Button, Container, Paper } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchBalance, prepareWriteContract, writeContract } from '@wagmi/core';
import { AuragiIcon } from 'assets/icons';
import { Abi } from 'contracts';
import { useWalletStatus } from 'hooks';
import { enqueueSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { contractSelector } from 'reducers/contractSlice';
import { queryClient } from 'services';
import { shorten } from 'utils/common';
import { BASE_TOKEN_SYMBOL } from 'utils/constants';

const Faucet = () => {
  const { isWrongStatus, address } = useWalletStatus();
  const { AGI } = useSelector(contractSelector);

  const { data: balance } = useQuery(
    ['Wagmi.fetchBalance', { address, token: AGI }],
    () => fetchBalance({ address: address!, token: AGI }),
    { enabled: !!address },
  );

  const { mutate: faucet, isLoading } = useMutation(
    async () => {
      const config = await prepareWriteContract({
        address: AGI,
        abi: Abi.Auragi,
        functionName: 'faucet',
        args: [],
      });
      return (await writeContract(config)).wait();
    },
    {
      onSuccess: () => {
        enqueueSnackbar('Claim successfully');
        queryClient.invalidateQueries(['Wagmi.fetchBalance']);
      },
    },
  );

  const handleClickClaim = () => {
    if (isWrongStatus()) return;
    faucet();
  };

  return (
    <Container>
      <Container maxWidth='sm' className='py-[120px]'>
        <Paper className='p-6'>
          <div className='mb-6 flex justify-end'>
            <Button color='inherit' className='h-10 p-0.5 shadow-base'>
              <div suppressHydrationWarning className='px-3'>
                {Number(balance?.formatted ?? 0).toFixed(2)} {balance?.symbol}
              </div>
              <div className='rounded-base bg-black/5 px-3 py-1.5'>
                <span suppressHydrationWarning>{shorten(address)}</span>
              </div>
            </Button>
          </div>

          <div className='flex items-center justify-center gap-2'>
            <Avatar src={AuragiIcon.src} />
            <span className='text-2xl font-bold'>Faucet</span>
          </div>
          <div className='mt-3 flex flex-col items-stretch'>
            <div className='mb-1 text-right text-lg font-bold'>1000 {BASE_TOKEN_SYMBOL}</div>
            <LoadingButton size='large' variant='contained' loading={isLoading} onClick={handleClickClaim}>
              CLAIM
            </LoadingButton>
          </div>
        </Paper>
      </Container>
    </Container>
  );
};

export default Faucet;
