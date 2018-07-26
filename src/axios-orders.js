import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3683e.firebaseio.com/'
})

export default instance;