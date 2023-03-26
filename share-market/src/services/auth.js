import api from '../utils/api';

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  register: async (name, email, password) => {
    try {
      const response = await api.post('/auth/register', { name, email, password });
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
};

export default AuthService;
