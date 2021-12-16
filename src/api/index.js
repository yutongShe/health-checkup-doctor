import axios from 'axios';

const baseUrl = 'http://localhost:3000/api';
const loginUrl = baseUrl + '/login'

export const loginApi = (userInfo) => axios.post(loginUrl, userInfo);

// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
