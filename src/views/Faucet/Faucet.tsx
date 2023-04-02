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
    ['fetchBalance', { address, token: AGI }],
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
        queryClient.invalidateQueries(['fetchBalance']);
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
        <Paper className='shadow-base p-6'>
          <div className='flex justify-end mb-6'>
            <Button color='inherit' className='shadow-base p-0.5 h-10'>
              <div suppressHydrationWarning className='px-3'>
                {Number(balance?.formatted ?? 0).toFixed(2)} {balance?.symbol}
              </div>
              <div className='bg-black/5 rounded-lg px-3 py-1.5'>
                <span suppressHydrationWarning>{shorten(address)}</span>
              </div>
            </Button>
          </div>

          <div className='flex items-center justify-center gap-2'>
            <Avatar src={AuragiIcon.src} />
            <span className='text-2xl font-bold'>Faucet</span>
          </div>
          <div className='flex flex-col items-stretch mt-3'>
            <div className='text-right text-lg font-bold mb-1'>1000 {BASE_TOKEN_SYMBOL}</div>
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
