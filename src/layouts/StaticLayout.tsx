import { AppHeader } from 'containers';

const StaticLayout = ({ children }) => {
  return (
    <main>
      <AppHeader />
      {children}
    </main>
  );
};

export default StaticLayout;
