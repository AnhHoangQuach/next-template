import { Box } from '@mui/material';
import { AppFooter, AppHeader } from 'containers';
import { useSelector } from 'react-redux';
import { initAssets } from 'reducers/assetPersist';
import { assetSelector } from 'reducers/assetSlice';
import { initContract } from 'reducers/contractPersist';
import { contractSelector } from 'reducers/contractSlice';

initContract();
initAssets();

const StaticLayout = ({ children }) => {
  const { ...allContract } = useSelector(contractSelector);
  const { allTokens, ...allAsset } = useSelector(assetSelector);
  const isReady = Object.keys(allContract).length * Object.keys(allAsset).length > 0;

  return (
    <main>
      <AppHeader />
      <Box
        sx={{
          minHeight: {
            sm: `calc(100vh - 64px - 88px)`,
          },
          padding: '24px 0',
        }}
      >
        {isReady && children}
      </Box>
      <AppFooter reverse />
    </main>
  );
};

export default StaticLayout;
