import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { AppFooter, AppHeader } from 'containers';
import { Api } from 'services';

const StaticLayout = ({ children }) => {
  // TODO redux-persist
  const { isSuccess } = useQuery(['getAllContract'], () =>
    Api.getAllContract().then((contracts) => {
      return contracts.reduce(
        (map, contract) => ({
          ...map,
          [contract.name]: contract,
        }),
        {},
      ) as ContractMap;
    }),
  );

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
