// import { Provider } from 'react-redux';
// import { store } from 'reducers/store';
// import { QueryClientProvider } from 'react-query';
// import { SnackbarProvider } from 'notistack';
// import { AppController } from 'containers';
// import { queryClient } from 'services';

const PublicLayout = ({ children }) => {
  return (
    // <Provider store={store}>
    //   <QueryClientProvider client={queryClient}>
    //     <SnackbarProvider preventDuplicate anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    //       <AppController>
    //         <>{children}</>
    //       </AppController>
    //     </SnackbarProvider>
    //   </QueryClientProvider>
    // </Provider>
    <>{children}</>
  );
};

export default PublicLayout;
