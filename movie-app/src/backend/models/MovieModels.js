import axios from 'axios';
import { MovieDTO } from '../dtos/MovieDTO';

const getPopularMovies = async () => {
    const cleanedMovies = [];
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/11?api_key=${process.env.API_KEY}`, {
            headers: {
                "Content-Type": 'application/json',
                Authorization:`Bearer ${process.env.API_KEY}`
            }
    })
        const data = response.data;
        const movies = data.results;
        movies.map(movie => {
            let cleanedMovie = new MovieDTO(movie.title, movie.popularity, movie.release_date)
            cleanedMovies.push(cleanedMovie);
        })
        return cleanedMovies;
    } catch (e) {
        console.error( `Error: ${e}`)
        throw e
    }
}

export default getPopularMovies;