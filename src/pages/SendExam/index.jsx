import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import Logo from '../shared/Logo';
import TextInput from '../shared/TextInput';
import GreenButton from '../shared/GreenButton';
import OptionsInput from '../shared/OptionsInput';

import {
  getTeachers, getCourses, getExamCategories,
} from '../../services/repoprovas.services';

const Home = () => {
  const navigate = useNavigate();

  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    url: '',
    year: '',
    semester: '',
    course: '',
    teacher: '',
  });
  const semesters = [
    {
      name: '1',
    },
    {
      name: '2',
    },
  ];

  const handleFormDataChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setCourses(getCourses());
    setTeachers(getTeachers());
    setCategories(getExamCategories());
  }, []);

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <TextInput
          title="URL do pdf"
          width="100%"
          placeholder=" Ex.: https://drive.google.com..."
        />
        <ExamName>
          <TextInput
            title="Ano da prova"
            width="133px"
            placeholder="Ex.: 2020"
          />
          <OptionsInput
            handleFormDataChange={handleFormDataChange}
            options={semesters}
            title="Semestre"
            width="100px"
          />
        </ExamName>
        <OptionsInput
          handleFormDataChange={handleFormDataChange}
          options={courses}
          title="Disciplina"
          width="82%"
        />
        <OptionsInput
          handleFormDataChange={handleFormDataChange}
          options={teachers}
          title="Professor"
          width="82%"
        />
        <OptionsInput
          handleFormDataChange={handleFormDataChange}
          options={categories}
          title="Categoria"
          width="133px"
        />
        <ButtonContainer>
          <GreenButton
            type="submit"
            title="Enviar"
            onClick={() => navigate('/')}
          />
        </ButtonContainer>
      </Form>
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

const Form = styled.form`
  width: 90%;
  max-width: 612px;
  height: fit-content;
  min-height: 512px;
  background-color: #c4c4c4;
  font-size: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  padding: 30px 30px;
`;

const ExamName = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 100px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
