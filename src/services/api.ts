import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.15.0.31:3333',
});
