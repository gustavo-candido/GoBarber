import React, { FC } from 'react';

import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global';
import SignIn from './Pages/SignIn';
// import SignUp from './Pages/SignUp';

import ToastContainer from './components/ToastContainer';

const App: FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
