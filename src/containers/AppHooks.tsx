import { useSetupGA } from 'hooks';

const AppHooks = ({ children }) => {
  useSetupGA();

  return <>{children}</>;
};

export default AppHooks;
