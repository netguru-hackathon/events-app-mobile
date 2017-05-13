import axios from 'axios';
import { baseURL } from '../constants/constants';

const client = axios.create({
  baseURL,
  responseType: 'json',
});

export default client;
