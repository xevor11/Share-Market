import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const api = {
  get: (url, params) => axios.get(`${API_URL}${url}`, { params }),
  post: (url, data) => axios.post(`${API_URL}${url}`, data),
  put: (url, data) => axios.put(`${API_URL}${url}`, data),
  delete: (url) => axios.delete(`${API_URL}${url}`),
};
