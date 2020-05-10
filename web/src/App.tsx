import React, { FC } from 'react';

import GlobalStyle from './styles/global';
// import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const App: FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
