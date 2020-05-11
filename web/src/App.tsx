import React, { FC } from 'react';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';
import SignIn from './Pages/SignIn';

const App: FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
