import React from 'react';
import styled from 'styled-components';

const ExamBox = ({
  name, url, course, teacher, show,
}) => {
  const handleClick = () => {
    window.open(
      `${url}`,
      'pdf prova',
      'left=100,top=100,width=420,height=420',
    );
  };

  return (
    <Container onClick={handleClick}>
      <Name>{name}</Name>
      <span>
        {
          show === 'disciplina'
            ? `Disciplina: ${course}`
            : `Professor(a): ${teacher}`
        }

      </span>
    </Container>
  );
};

export default ExamBox;

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

const Name = styled.span`
  font-weight: 700;
`;
