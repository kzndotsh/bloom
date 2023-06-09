import axios from 'axios';

// for this project, I will be using the TMDB api to fetch movie data
// access auth token: xxxxxx
// api key auth: xxxxx

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'xxxxxxx';

const tmdb = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
    },
});

export default tmdb;
