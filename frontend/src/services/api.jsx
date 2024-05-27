// Frontend - src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5004/api/data', // Adjust the base URL if necessary
});

export default api;
