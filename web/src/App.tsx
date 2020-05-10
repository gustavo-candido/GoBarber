import React, { FC } from 'react';

import GlobalStyle from './styles/global';
import SignIn from './Pages/SignIn';
// import SignUp from './Pages/SignUp';

import { AuthProvider } from './hooks/AuthContext';

const App: FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
