import axios from 'axios';

const URL_API = process.env.REACT_APP_URL_API;

const getCourseTeachers = (id) => axios.get(`${URL_API}/course/${id}/teachers`);

const getCourses = () => axios.get(`${URL_API}/course`);

const getExamCategories = () => axios.get(`${URL_API}/category`);

const createExam = (body) => axios.post(`${URL_API}/exam`, body);

const getTeachers = () => axios.get(`${URL_API}/teacher`);

export {
  getExamCategories,
  getCourseTeachers,
  getCourses,
  createExam,
  getTeachers,
};
