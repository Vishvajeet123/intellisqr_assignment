import React from 'react';
    import LoginForm from './components/LoginForm';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';

import "./App.css"    


    const queryClient = new QueryClient();

    const App: React.FC = () => {
      return (
       <> 
        <ToastContainer position="top-right" autoClose={3000} />
        <QueryClientProvider client={queryClient}>
          <div className="App">
            <LoginForm />
          </div>
   
          </QueryClientProvider>
          </>
      );
    };

    export default App