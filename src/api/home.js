import axios from 'axios';

const BASE_URL=process.env.REACT_APP_SERVER_URL

export async function getAllMovies() {
    return await axios.get(`${BASE_URL}/mba/api/v1/movies/`)
}

export async function getMovie(id) {
    return await axios.get(`${BASE_URL}/mba/api/v1/movies/${id}`)
}

