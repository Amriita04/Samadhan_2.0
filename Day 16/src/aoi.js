import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend API base URL
});

export default api;
import api from '../api';

const res = await api.post('/auth/login', { email, password });
