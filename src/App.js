import React from 'react';

import LyricProvider from './context/lyric';
import Main from './pages/Main';

import './styles/global.css';

const App = () => {
  return (
    <LyricProvider>
      <Main />
    </LyricProvider>
  );
};

export default App;
