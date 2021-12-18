// import axios from 'axios';

// const URL_API = process.env.REACT_APP_URL_API;

/* const getConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
*/

const getExamCategories = () => {
  return [
    {
      id: 1,
      name: 'P1',
    },
    {
      id: 1,
      name: 'P2',
    },
    {
      id: 1,
      name: 'P3',
    },
    {
      id: 1,
      name: 'Exame',
    },
    {
      id: 1,
      name: 'Outros',
    },
  ];
};

const getTeachers = () => {
  return [
    {
      id: 1,
      name: 'Maria Lígia',
    },
    {
      id: 2,
      name: 'Marcio Rosa',
    },
    {
      id: 3,
      name: 'Ricardo Amorim',
    },
    {
      id: 4,
      name: 'Vagner Ferreira',
    },
    {
      id: 5,
      name: 'Sabrina Fernandes',
    },
    {
      id: 6,
      name: 'Fabrício Mota',
    },
    {
      id: 7,
      name: 'Wesley Ribeiro',
    },
  ];
};

const getCourses = () => {
  return [
    {
      id: 1,
      period_id: 1,
      name: 'Cálculo 1',
    },
    {
      id: 2,
      period_id: 2,
      name: 'Cálculo 2',
    },
    {
      id: 3,
      period_id: 3,
      name: 'Cálculo 3',
    },
    {
      id: 4,
      period_id: 1,
      name: 'Geometria Analítica',
    },
    {
      id: 5,
      period_id: 2,
      name: 'Álgebra Linear',
    },
    {
      id: 6,
      period_id: 1,
      name: 'Física 1',
    },
    {
      id: 7,
      period_id: 2,
      name: 'Física 2',
    },
    {
      id: 8,
      period_id: 3,
      name: 'Física 3',
    },
    {
      id: 9,
      period_id: 2,
      name: 'Estrutura de dados',
    },
    {
      id: 10,
      period_id: 5,
      name: 'Banco de dados',
    },
  ];
};

export { getExamCategories, getTeachers, getCourses };
