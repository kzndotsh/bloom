import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9000/api',
});

// GET ALL
const getMovies = () => {
    return api.get('/movies');
};

// GET by ID
const getMovieById = (id) => {
    return api.get(`/movies/${id}`);
};

// POST
const postMovie = (movie) => {
    return api.post('/movies', movie);
};

// PUT
const putMovie = (id, movie) => {
    return api.put(`/movies/${id}`, movie);
};

// DELETE
const deleteMovie = (id) => {
    return api.delete(`/movies/${id}`);
};

export { getMovies, getMovieById, postMovie, putMovie, deleteMovie };
