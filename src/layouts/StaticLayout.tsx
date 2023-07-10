import { Box } from '@mui/material';
import { AppFooter, AppHeader } from 'containers';

const StaticLayout = ({ children }) => {
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
        {children}
      </Box>
      <AppFooter />
    </main>
  );
};

export default StaticLayout;
