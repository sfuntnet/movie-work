import axios from 'axios';

const app = axios.create({
    baseURL: process.env.REACT_APP_MOVIE_API_URL,
    headers: {
        'authorization': 'apikey 1s7o6OSGsEhgxthXYzM5zp:0kroj87X1eJNUZmkqrC0CV'
    }
});

export default app;