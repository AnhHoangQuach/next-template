import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { Api } from 'services';
import { useAccount } from 'wagmi';

type Props = {
  tokenId?: number;
};

const RewardTable = ({ tokenId }: Props) => {
  const { address } = useAccount();

  const { data } = useQuery(
    ['Api.fetchAddressReward', address, tokenId],
    () => Api.fetchAddressReward({ address: address!, tokenId: tokenId }),
    { enabled: !!address && !!tokenId },
  );

  return (
    <Paper className='h-[400px] shadow-none'>
      <DataGrid
        classes={
          {
            // root: 'border-0',
          }
        }
        rows={[
          { id: 1, col1: 'Hello', col2: 'World' },
          { id: 2, col1: 'MUI X', col2: 'is awesome' },
          { id: 3, col1: 'Material UI', col2: 'is amazing' },
          { id: 4, col1: 'MUI', col2: '' },
          { id: 5, col1: 'Joy UI', col2: 'is awesome' },
          { id: 6, col1: 'MUI Base', col2: 'is amazing' },
        ]}
        columns={[
          { field: 'id' },
          { field: 'col1', headerName: 'Column 1', width: 150 },
          { field: 'col2', headerName: 'Column 2', width: 150 },
        ]}
      />
    </Paper>
  );
};

export default RewardTable;
