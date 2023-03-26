import api from '../utils/api';

const messagesService = {
  getMessages: async () => {
    const response = await api.get('/messages');
    return response.data;
  },
  createMessage: async (message) => {
    const response = await api.post('/messages', message);
    return response.data;
  },
  deleteMessage: async (id) => {
    const response = await api.delete(`/messages/${id}`);
    return response.data;
  },
  updateMessage: async (id, message) => {
    const response = await api.put(`/messages/${id}`, message);
    return response.data;
  }
};

export default messagesService;
