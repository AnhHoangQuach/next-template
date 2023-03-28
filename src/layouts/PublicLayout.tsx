import { AppHeader, AppProvider } from 'containers';

const PublicLayout = ({ children }) => {
  return (
    <AppProvider>
      <AppHeader />
      {children}
    </AppProvider>
  );
};

export default PublicLayout;
