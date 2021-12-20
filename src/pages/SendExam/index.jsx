/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import Logo from '../shared/Logo';
import TextInput from '../shared/TextInput';
import GreenButton from '../shared/GreenButton';
import OptionsInput from '../shared/OptionsInput';

import { isFormValid } from '../../validations/sendExam.validation';
import {
  getCourseTeachers, getCourses, getExamCategories, createExam,
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
    category: '',
  });
  const semesters = [
    {
      name: '1',
    },
    {
      name: '2',
    },
  ];

  const handleTextFormDataChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleOptionsFormDataChange = (prop, value) => {
    setFormData({ ...formData, [prop]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid(formData)) {
      return (Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha os campos corretamente',
      }));
    }

    const newExam = {
      url: formData.url,
      name: `${formData.year}.${formData.semester}`,
      teacherId: formData.teacher,
      categoryId: formData.category,
      courseId: formData.course,
    };

    createExam(newExam)
      .then(() => {
        Swal.fire({
          icon: 'success',
          text: 'Prova salva',
        });
        navigate('/');
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 404) {
          return (Swal.fire({
            icon: 'error',
            text: 'Disciplina e professor(a) nao compatíveis, preencha corretamente',
          }));
        }
        if (status === 400) {
          return (Swal.fire({
            icon: 'error',
            text: 'Preencha os dados corretamente',
          }));
        }
        return (Swal.fire({
          icon: 'error',
          text: 'Preencha os dados corretamente',
        }));
      });
  };

  useEffect(() => {
    getCourses()
      .then((res) => {
        setCourses(res.data);
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Tente novamente mais tarde',
        });
      });
    getExamCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Tente novamente mais tarde',
        });
      });
  }, []);

  useEffect(() => {
    if (formData.course > 0) {
      getCourseTeachers(formData.course)
        .then((res) => {
          setTeachers(res.data);
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tente novamente mais tarde',
          });
        });
    }
  }, [formData]);

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <TextInput
          handleFormDataChange={handleTextFormDataChange}
          prop="url"
          title="URL do pdf"
          width="100%"
          placeholder=" Ex.: https://drive.google.com..."
        />
        <ExamName>
          <TextInput
            handleFormDataChange={handleTextFormDataChange}
            title="Ano da prova"
            prop="year"
            width="133px"
            placeholder="Ex.: 2020"
          />
          <OptionsInput
            handleFormDataChange={handleOptionsFormDataChange}
            prop="semester"
            options={semesters}
            title="Semestre"
            width="100px"
          />
        </ExamName>
        <OptionsInput
          handleFormDataChange={handleOptionsFormDataChange}
          options={courses}
          prop="course"
          title="Disciplina"
          width="82%"
        />
        <OptionsInput
          handleFormDataChange={handleOptionsFormDataChange}
          options={teachers}
          prop="teacher"
          title="Professor"
          width="82%"
        />
        <OptionsInput
          handleFormDataChange={handleOptionsFormDataChange}
          options={categories}
          prop="category"
          title="category"
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
  height: fit-content;
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
