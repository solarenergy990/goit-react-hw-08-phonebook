import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7777';

const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

const postContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};
const deleteContact = async contactId => {
  console.log('fetch id', contactId);
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};

const contactAPI = {
  getContacts,
  postContact,
  deleteContact,
};

export default contactAPI;
