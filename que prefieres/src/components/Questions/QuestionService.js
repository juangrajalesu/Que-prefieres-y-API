import axios from "axios";

const API = "http://localhost:3001";

export const getQuestions = async () => {
  return axios.get(`${API}/questions`);
};

export const setQuestion = async (question) => {
  return axios.post(`${API}/questions`, question);
};

export const getQuestion = async (id) => {
  return axios.get(`${API}/questions/${id}`);
};

export const updateQuestion = async (id, question) => {
  return axios.put(`${API}/questions/${id}`, question);
};

export const deleteQuestion = async (id) => {
  return axios.delete(`${API}/questions/${id}`);
};
