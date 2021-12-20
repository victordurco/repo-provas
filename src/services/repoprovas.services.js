import axios from 'axios';

const URL_API = process.env.REACT_APP_URL_API;

const getCourseTeachers = (id) => axios.get(`${URL_API}/course/${id}/teachers`);

const getCourses = () => axios.get(`${URL_API}/course`);

const getExamCategories = () => axios.get(`${URL_API}/category`);

const createExam = (body) => axios.post(`${URL_API}/exam`, body);

const getTeachers = () => axios.get(`${URL_API}/teacher`);

const getExamsByTeacherId = (id) => axios.get(`${URL_API}/exam/teacher/${id}`);

const getExamsByCourseId = (id) => axios.get(`${URL_API}/exam/course/${id}`);

const getCoursesWithExams = () => axios.get(`${URL_API}/course/exams`);

const getPeriods = () => axios.get(`${URL_API}/period`);

export {
  getExamCategories,
  getCourseTeachers,
  getCourses,
  createExam,
  getTeachers,
  getExamsByTeacherId,
  getExamsByCourseId,
  getCoursesWithExams,
  getPeriods,
};
