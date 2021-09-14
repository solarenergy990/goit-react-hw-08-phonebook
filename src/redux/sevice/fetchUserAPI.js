import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const postRegisteredUser = async registerData => {
  const { data } = await axios.post('/users/signup', registerData);
  return data;
};

const postLoggedInUser = async loginData => {
  const { data } = await axios.post('/users/login', loginData);
  return data;
};

const getCurrentUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};

const postLoggedOutUser = async () => {
  await axios.post('/users/logout');
};

const userAPI = {
  postRegisteredUser,
  postLoggedInUser,
  getCurrentUser,
  postLoggedOutUser,
};

export default userAPI;
