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
  background-color: #C4C4C4;
  border-radius: 20px;
  cursor: pointer;

  :hover{
    background-color: #797979
  }
`;

const Name = styled.span`
  font-weight: 700;
`;
