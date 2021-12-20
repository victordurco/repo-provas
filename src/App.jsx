import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import SendExam from './pages/SendExam';
import Teachers from './pages/Teachers';
import Teacher from './pages/Teacher';
import Courses from './pages/Courses';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enviar" element={<SendExam />} />
        <Route path="/professores" element={<Teachers />} />
        <Route path="/professores/:id" element={<Teacher />} />
        <Route path="/disciplinas" element={<Courses />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
