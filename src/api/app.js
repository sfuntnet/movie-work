import axios from 'axios';

const app = axios.create({
    baseURL: process.env.REACT_APP_MOVIE_API_URL,
    headers: {
        'authorization': 'apikey 5BmENI4wwEIdyTefUAUGsh:4U9xfpqE8SIuJZcBDxl35C'
    }
});

export default app;