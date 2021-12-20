import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NameNumberBox = ({
  name, id, array, nextPage,
}) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/${nextPage}/${id}`)}>
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
  font-weight: 700;
  color: #1f1f1f;
  background-image: linear-gradient(to left, #C4C4C4, #E9C1C8); 
  border-radius: 20px;
  cursor: pointer;
  @keyframes go-back {
    0% {
        transform: translateX(50px);
    }
    100% {
        transform: translateX(0);
    }
}
  animation: go-back 0.5s;



  :hover{
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;
