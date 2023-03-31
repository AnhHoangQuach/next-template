import { Box } from '@mui/material';
import { AppFooter, AppHeader } from 'containers';

const StaticLayout = ({ children }) => {
  return (
    <main>
      <AppHeader />
      <Box
        sx={{
          minHeight: {
            lg: `calc(100vh - 40px - 88px - 64px)`,
            sm: `calc(100vh - 32px - 64px - 64px)`,
            xs: `calc(100vh - 32px - 56px - 56px)`,
          },
        }}
      >
        {children}
      </Box>
      <AppFooter />
    </main>
  );
};

export default StaticLayout;
