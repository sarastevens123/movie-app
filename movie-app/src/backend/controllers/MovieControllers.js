import {getPopularMovies} from "../models/MovieModels.js";



export const getPopularMoviesController = async() => {
    return await getPopularMovies()
}

