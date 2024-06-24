import express from 'express';
import { getPopularMoviesController } from '../controllers/MovieControllers.js';

const router = express.Router()


//  /movies/popularMovies
router.get('/popularMovies', async (req, res) => {
    try {
        const movies =await getPopularMoviesController();
        res.send(movies)
    } catch (e) {
        console.log(e)
        res.status(500).send("Internal Server Error")

    }
});

export default router;