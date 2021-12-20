import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTeachers } from '../../services/repoprovas.services';

import Logo from '../shared/Logo';
import Title from '../shared/Title';
import NameNumberBox from '../shared/NameNumberBox';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getTeachers()
      .then((res) => {
        setTeachers(res.data);
      })
      .catch();
  }, []);

  return (
    <Container>
      <Logo />
      <Title title="Professores" />
      <TeachersWrapper>
        {
          teachers.length > 0
            ? teachers.map((teacher) => (
              <NameNumberBox
                key={teacher.id}
                name={teacher.name}
                id={teacher.id}
                nextPage="professores"
                array={teacher.exams || []}
              />
            ))
            : ''
        }
      </TeachersWrapper>
    </Container>
  );
};

export default Teachers;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 0 0;
`;

const TeachersWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
`;
