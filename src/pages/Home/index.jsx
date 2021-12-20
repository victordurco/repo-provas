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
   animation: fadeIn 0.5s;
`;

const SendExamButton = styled.button`
  width: 318px;
  height: 122px;
  background-image: linear-gradient(to top, #182825, #19322C); 
  font-size: 30px;
  color:#E8E3D7;
  border-radius: 10px;
  margin-top: 15vh;
  cursor: pointer;

  :hover{
   transform: scale(1.1);
    transition: all 0.5s;
  }
`;

const SearchExamBox = styled.div`
  width: 318px;
  height: 263px;
  background-image: linear-gradient(to top, #182825, #19322C); 
  font-size: 30px;
  color:#E8E3D7;
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
  font-weight: 400;
  background-image: linear-gradient(to top, #57A287, #E8E3D7);  ;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 2vh;
  cursor: pointer;
  color:#182825;

  :hover{
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;
