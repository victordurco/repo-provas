import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NameNumberBox = ({ name, id, array }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/professores/${id}`)}>
      {name}
      <span>{`Provas: ${array.length}`}</span>
    </Container>
  );
};

export default NameNumberBox;

const Container = styled.div`
  width: 150px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  background-color: #C4C4C4;
  border-radius: 20px;
  cursor: pointer;

  :hover{
    background-color: #797979
  }
`;
