import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getExamsByCourseId, getExamCategories } from '../../services/repoprovas.services';

import Logo from '../shared/Logo';
import Title from '../shared/Title';
import ExamBox from '../shared/ExamBox';

const Course = () => {
  const [categories, setCategories] = useState([]);
  const [exams, setExams] = useState([]);
  const { id } = useParams();
  const courseId = Number(id);

  useEffect(() => {
    getExamsByCourseId(courseId)
      .then((res) => {
        setExams(res.data);
      })
      .catch();
    getExamCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch();
  }, [id]);

  return (
    <Container>
      <Logo />
      {
        categories.length > 0
          ? categories.map((category) => (
            <>
              <Title title={category.name} />
              <TeachersWrapper>
                {
                  exams.length > 0
                    ? exams.filter((exam) => exam.category.id === category.id).map((exam) => (
                      <ExamBox
                        key={exam.id}
                        id={exam.id}
                        name={exam.name}
                        url={exam.url}
                        teacher={exam.teacher.name}
                        course={exam.course.name}
                        show="professor"
                      />
                    ))
                    : ''
                }
              </TeachersWrapper>
            </>
          ))
          : ''
      }
    </Container>
  );
};

export default Course;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 0 0;
  animation: fadeIn 0.5s;
`;

const TeachersWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 186px);
  gap: 10px;
`;
