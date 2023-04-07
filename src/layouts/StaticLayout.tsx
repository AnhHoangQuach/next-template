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
            lg: `calc(100vh - 40px - 88px - 88px)`,
            sm: `calc(100vh - 40px - 64px - 88px)`,
            xs: `calc(100vh - 40px - 56px - 88px)`,
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
