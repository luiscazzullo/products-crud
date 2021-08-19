import axios from 'axios';

const clientAxios = axios.create({
  baseURL: 'http://localhost:7500/api/v1'
});

export default clientAxios