import { AppHeader, AppProvider } from 'containers';

const PublicLayout = ({ children }) => {
  return (
    <AppProvider>
      <main>
        <AppHeader />
        {children}
      </main>
    </AppProvider>
  );
};

export default PublicLayout;
