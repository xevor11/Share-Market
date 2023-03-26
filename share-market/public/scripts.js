const apiUrl = 'http://localhost:5000'; // replace with your API url

const apiRequest = async (method, path, data = null, token = null) => {
  const headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const options = { method, headers };
  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${apiUrl}${path}`, options);
  const responseData = await response.json();

  if (!response.ok) {
    const error = new Error(responseData.message || 'Something went wrong');
    error.status = response.status;
    throw error;
  }

  return responseData;
};

const getToken = () => {
  return localStorage.getItem('authToken');
};

const saveToken = (token) => {
  localStorage.setItem('authToken', token);
};

const removeToken = () => {
  localStorage.removeItem('authToken');
};

const isLoggedIn = () => {
  const token = getToken();
  return token !== null;
};

const login = async (email, password) => {
  const data = await apiRequest('POST', '/auth/login', { email, password });
  saveToken(data.token);
};

const logout = () => {
  removeToken();
};

const getItems = async () => {
  const data = await apiRequest('GET', '/items');
  return data.items;
};

const addItem = async (name, description) => {
  const token = getToken();
  const data = await apiRequest('POST', '/items', { name, description }, token);
  return data.item;
};

const getMessages = async (itemId) => {
  const data = await apiRequest('GET', `/items/${itemId}/messages`);
  return data.messages;
};

const addMessage = async (itemId, content) => {
  const token = getToken();
  const data = await apiRequest('POST', `/items/${itemId}/messages`, { content }, token);
  return data.message;
};

export {
  getToken,
  saveToken,
  removeToken,
  isLoggedIn,
  login,
  logout,
  getItems,
  addItem,
  getMessages,
  addMessage,
};
