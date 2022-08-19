import axios from 'axios';
import { BASE_URL } from 'constants/api';

const customAxios = axios.create({
  baseURL: BASE_URL,
});

export const getContacts = async () => {
  const { data } = await customAxios.get('');
  return data;
};

export const addContacts = async contact => {
  const { data } = await customAxios.post('', contact);
  return data;
};
export const deleteContacts = async id => {
  const { data } = await customAxios.delete(`/${id}`);
  return data;
};
