import axios from 'axios';

const accessToken = '';
const baseURL = 'http://15.165.19.81:8080';

let config = {
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
};

if (accessToken) {
  config.headers = { ...config.headers, Authorization: `Bearer ${accessToken}` };
}

export default axios.create(config);
