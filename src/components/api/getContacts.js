import axios from 'axios';
import { BASE_URL } from 'constants/api';

const customAxios = axios.create({
  baseURL: BASE_URL,
});

export const getContacts = async () => {
  const { data } = await customAxios.get('');
  return data;
};
