import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCoursesWithExams, getPeriods } from '../../services/repoprovas.services';

import Logo from '../shared/Logo';
import Title from '../shared/Title';
import NameNumberBox from '../shared/NameNumberBox';

const Courses = () => {
  const [periods, setPeriods] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getPeriods()
      .then((res) => {
        setPeriods(res.data);
      })
      .catch();
    getCoursesWithExams()
      .then((res) => {
        setCourses(res.data);
      })
      .catch();
  }, []);

  return (
    <Container>
      <Logo />
      {
        periods.length > 0
          ? periods.map((period) => (
            <React.Fragment key={period.name}>
              <Title title={`${period.name} período`} key={`${period.name} período`} />
              <CoursesWrapper>
                {
                  courses.length > 0
                    ? courses.filter((course) => course.period_id === period.id).map((course) => (
                      <NameNumberBox
                        key={course.id}
                        name={course.name}
                        id={course.id}
                        nextPage="disciplinas"
                        array={course.exams || []}
                      />
                    ))
                    : ''
                }
              </CoursesWrapper>
            </React.Fragment>
          ))
          : ''
      }
    </Container>
  );
};

export default Courses;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 0 0;
`;

const CoursesWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
`;
