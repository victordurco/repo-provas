import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import SendExam from './pages/SendExam';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enviar" element={<SendExam />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
