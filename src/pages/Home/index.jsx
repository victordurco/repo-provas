import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Logo from '../shared/Logo';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo />
      <SendExamButton onClick={() => navigate('/enviar')}>
        Enviar Prova
      </SendExamButton>
      <SearchExamBox>
        Procurar prova
        <SearchTypeButton onClick={() => navigate('/disciplinas')}>
          por disciplina
        </SearchTypeButton>
        <SearchTypeButton onClick={() => navigate('/professores')}>
          por professor
        </SearchTypeButton>
      </SearchExamBox>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 0 0;
`;

const SendExamButton = styled.button`
  width: 318px;
  height: 122px;
  background-color: #c4c4c4;
  font-size: 30px;
  border-radius: 10px;
  margin-top: 15vh;
  cursor: pointer;

  :hover{
    background-color: #a0a0a0;
  }
`;

const SearchExamBox = styled.div`
  width: 318px;
  height: 263px;
  background-color: #c4c4c4;
  font-size: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  padding: 30px 5px;
`;

const SearchTypeButton = styled.div`
  width: 80%;
  height: 30%;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 2vh;
  cursor: pointer;

  :hover{
    background-color: #a0a0a0;
  }
`;
