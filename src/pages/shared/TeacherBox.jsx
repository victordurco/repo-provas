import React from 'react';
import styled from 'styled-components';

const TeacherBox = ({ name, exams }) => {
  return (
    <Container>
      {name}
      <span>{`Provas: ${exams.length}`}</span>
    </Container>
  );
};

export default TeacherBox;

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
