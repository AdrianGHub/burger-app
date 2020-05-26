import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-adee6.firebaseio.com/'
});

export default instance;