import React, { FC } from 'react';

import GlobalStyle from './styles/global';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

import AuthContext from './context/AuthContext';

const App: FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Candido' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
