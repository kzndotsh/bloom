import axios from 'axios';

// for this project, I will be using the TMDB api to fetch movie data and then using DynaPictures to generate a modified movie poster

// DynaPictures API key: xxxxxx

// DynaPictures expects for the API key to be included in all API requests to the server in a header that looks like the following:
// Authorization: Bearer API_KEY

const BASE_URL = 'http://localhost:5000';
const API_KEY = 'xxxxx';

const dyna = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`,
        // 'Access-Control-Allow-Origin': '*',
        // 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        // 'Access-Control-Allow-Credentials': true,
        // 'Access-Control-Allow-Headers':
        //     'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    },
});

export default dyna;
