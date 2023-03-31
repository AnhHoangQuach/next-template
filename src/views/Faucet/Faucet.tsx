import { LoadingButton } from '@mui/lab';
import { Avatar, Button, Container, Paper } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchBalance, prepareWriteContract, writeContract } from '@wagmi/core';
import { AuragiIcon } from 'assets/icons';
import { Abi } from 'contracts';
import { useWalletStatus } from 'hooks';
import { enqueueSnackbar } from 'notistack';
import { queryClient } from 'services';
import { shorten } from 'utils/common';
import { AGI } from 'utils/constants';

const Faucet = () => {
  const { isWrongStatus, address } = useWalletStatus();

  const { data: Contract }: { data: ContractMap } = useQuery(['getAllContract'], {});

  const { data: balance } = useQuery(
    ['fetchBalance', { address, token: Contract?.AGI.address }],
    () => fetchBalance({ address: address!, token: Contract?.AGI.address }),
    { enabled: !!address && !!Contract },
  );

  const { mutate: faucet, isLoading } = useMutation(
    async () => {
      const config = await prepareWriteContract({
        address: Contract.AGI.address,
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
              <div className='px-3'>
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
            <div className='text-right text-lg font-bold mb-1'>1000 {AGI}</div>
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
