import { Box } from '@mui/material';
import { AppFooter, AppHeader } from 'containers';
import { initContract } from 'reducers/contractPersist';

initContract();

const StaticLayout = ({ children }) => {
  return (
    <main>
      <AppHeader />
      <Box
        sx={{
          minHeight: {
            sm: `calc(100vh - 64px - 88px)`,
          },
        }}
      >
        {children}
      </Box>
      <AppFooter reverse />
    </main>
  );
};

export default StaticLayout;
