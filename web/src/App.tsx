import React, { FC } from 'react';

import GlobalStyle from './styles/global';
import SignIn from './Pages/SignIn';

const App: FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
