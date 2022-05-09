import axios from 'axios';

// const baseUrl = 'http://localhost:8080';
const baseUrl = 'https://exp.zjubiomedit.com/healthcheckup'
const loginUrl = baseUrl + '/doctorLogin';
const commitDoctorEvaluationUrl = baseUrl + '/doctorEvaluation';
const getAppointmentDetailsUrl = baseUrl + '/appointment/getAppointmentDetails';


export const loginApi = (userInfo) => axios.post(loginUrl, userInfo);
export const getAppointmentDetailsApi = (userInfo) => axios.post(getAppointmentDetailsUrl, userInfo);
export const commitDoctorEvaluationApi = (doctorEvaluation) => axios.post(commitDoctorEvaluationUrl, doctorEvaluation)

// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
