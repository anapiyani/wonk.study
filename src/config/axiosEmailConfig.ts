import axios from 'axios';

axios.defaults.baseURL = 'https://wonk-dpyuy.ondigitalocean.app/email';
axios.defaults.headers.common['Authorization'] = `Bearer Yers_pidoras`;

const axiosEmail = axios;

export default axiosEmail;
